import "./styles.css";
import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import FormInput from "../../../components/FormInput";
import * as forms from "../../../utils/forms";
import * as productService from "../../../services/product-service";
import * as categoryService from "../../../services/category-service";
import FormTextArea from "../../../components/FormTextArea";
import Select from "react-select";
import { CategoryDTO } from "../../../model/category";
import FormSelect from "../../../components/FormSelect";
import { selectStyles } from "../../../utils/select";

export default function ProductForm() {
  const params = useParams();
  const navigate = useNavigate();
  const [categories, setCategories] = useState<CategoryDTO[]>([]);

  const isEditing = params.productId !== "create";

  const [formData, setFormData] = useState<any>({
    name: {
      value: "",
      id: "name",
      name: "name",
      type: "text",
      placeholder: "Nome",
      validation: function (value: string) {
        return value.length >= 3 && value.length <= 80;
      },
      message: "Favor informar um nome de 3 a 80 caracteres",
    },
    price: {
      value: "",
      id: "price",
      name: "price",
      type: "number",
      placeholder: "Preço",
      validation: function (value: any) {
        return Number(value) > 0;
      },
      message: "Favor informar um valor positivo",
    },
    imgUrl: {
      value: "",
      id: "imgUrl",
      name: "imgUrl",
      type: "text",
      placeholder: "Imagem",
    },
    description: {
      value: "",
      id: "description",
      name: "description",
      type: "text",
      placeholder: "Description",
      validation: function (value: string) {
        return value.length >= 10;
      },
      message: "Favor informar uma description minimo de 10 caracteres",
    },

    categories: {
      value: [],
      id: "categories",
      name: "categories",
      placeholder: "Categorias",
      validation: function (value: CategoryDTO[]) {
        return value.length > 0;
      },
      message: "Escolha ao menos uma categoria",
    },
  });

  useEffect(() => {
    categoryService.findAllRequest().then((response) => {
      setCategories(response.data);
    });
  }, []);

  useEffect(() => {
    if (isEditing) {
      productService.findById(Number(params.productId)).then((response) => {
        setFormData(forms.updateAll(formData, response.data));
      });
    }
  }, []);

  function handleInputChange(event: any) {
    setFormData(
      forms.updateAndValidate(formData, event.target.name, event.target.value)
    );
  }
  function handleTurnDirty(name: string) {
    setFormData(forms.dirtyAndValidate(formData, name));
  }
  function handleSubmit(event: any) {
    event.preventDefault();
    const formDateValidated = forms.dirtyAndValidateAll(formData);
    if (forms.hasAnyInvalid(formDateValidated)){
      setFormData(formDateValidated);
      return;
    }
    const requestBody = forms.toValues(formData);
    if (isEditing){
      requestBody.id = params.productId
    }

    const request = isEditing 
    ? productService.updateRequest(requestBody)
    :productService.inserteRequest(requestBody);

    request
    .then(() => {
      navigate("/admin/products")
    })
    .catch(error => {
      const newInputs = forms.setBackendErrors(formData, error.response.data.errors);
      setFormData(newInputs);
    });
  }

  return (
    <main>
      <section id="product-form-section" className="dsc-container">
        <div className="dsc-product-form-container">
          <form className="dsc-card dsc-form" onSubmit={handleSubmit}>
            <h2>Dados do produto</h2>
            <div className="dsc-form-controls-container">
              <div>
                <FormInput
                  {...formData.name}
                  onTurnDirty={handleTurnDirty}
                  className="dsc-form-control "
                  onChange={handleInputChange}
                />
                <div className="dsc-form-error">{formData.name.message}</div>
              </div>
              <div>
                <FormInput
                  {...formData.price}
                  onTurnDirty={handleTurnDirty}
                  className="dsc-form-control "
                  onChange={handleInputChange}
                />
                <div className="dsc-form-error">{formData.price.message}</div>
              </div>
              <div>
                <FormInput
                  {...formData.imgUrl}
                  onTurnDirty={handleTurnDirty}
                  className="dsc-form-control "
                  onChange={handleInputChange}
                />
              </div>

              <div>
                <FormSelect
                  {...formData.categories}
                  styles={selectStyles}
                  className="dsc-form-control dsc-form-select-container"
                  options={categories}
                  onChange={(obj: any) => {
                    const newFormData = forms.update(
                      formData,
                      "categories",
                      obj
                    );
                    setFormData(newFormData);
                  }}
                  onTurnDirty={handleTurnDirty}
                  isMulti
                  getOptionLabel={(obj: any) => obj.name}
                  getOptionValue={(obj: any) => String(obj.id)}
                />
                <div className="dsc-form-error">
                  {formData.categories.message}
                </div>
              </div>

              <div>
                <FormTextArea
                  {...formData.description}
                  onTurnDirty={handleTurnDirty}
                  className="dsc-form-control dsc-textarea"
                  onChange={handleInputChange}
                />
                <div className="dsc-form-error">
                  {formData.description.message}
                </div>
              </div>
            </div>

            <div className="dsc-product-form-buttons">
              <Link to="/admin/products">
                <button type="reset" className="dsc-btn dsc-btn-white">
                  Cancelar
                </button>
              </Link>
              <button type="submit" className="dsc-btn dsc-btn-blue">
                Salvar
              </button>
            </div>
          </form>
        </div>
      </section>
    </main>
  );
}
