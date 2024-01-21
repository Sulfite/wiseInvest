import { useEffect, useState } from "react";
import { Form } from "react-router-dom";
import { FormValidations } from "../../../../_config/yupconfig";
import { ValidationError } from "yup";

import Input from "../../../../components/input/Input";
import Button from "../../../../components/Button/Button";

import "./addRecommendation.css";

const initialForm = {
  recomendationTitle: "",
  recomendationDescription: "",
  recommendationStonksBuy: "",
  recommendationStonksSell: ""
};

export const AddRecommendation = () => {
  const [form, setForm] = useState(initialForm);
  const [errors, setErrors] = useState({});

  const validate = async () => {
      try {
          await FormValidations.validate(form, { abortEarly: false });
          setErrors({});
      } catch (e) {
          if (e instanceof ValidationError) {
              const errors = {};
              e.inner.forEach((key) => {
                  errors[key.path] = key.message;
              });
              setErrors(errors);
          }
      }
  };

  const setInput = (newValue) => {
      setForm((form) => ({ ...form, ...newValue }));
  };

  useEffect(() => {
      // eslint-disable-next-line
      validate();
  }, [form]);

  return (
    <div className="container containerAddRecommendatio">
      <Form>
        <div className="RecommendationTitle">
          <Input
            label={"Título: "}
            name="recomendationTitle"
            type="text"
            onChange={(e) => setInput({ recomendationTitle: e.target.value })}
            error={errors.recomendationTitle}
          />
        </div>

        <div className="recomendationDescription">
          <Input
            label={"Descrição: "}
            name="recomendationDescription"
            onChange={(e) => setInput({ recomendationDescription: e.target.value })}
            error={errors.recomendationDescription}
          />
        </div>

        <div className="recommendationStonksBuy">
          <Input
            label={"Recomendações de Compra: "}
            name="recommendationStonksBuy"
            type="text"
            onChange={(e) => setInput({ recommendationStonksBuy: e.target.value })}
            error={errors.recommendationStonksBuy}
          />
        </div>

        <div className="recommendationStonksSell">
          <Input
            label={"Recomendações de Venda: "}
            name="recommendationStonksSell"
            type="text"
            onChange={(e) => setInput({ recommendationStonksSell: e.target.value })}
            error={errors.recommendationStonksSell}
          />
        </div>


        <div className="buttonsControlRecommendation">
          <Button
            typeStyle={"btn"}
            // onClick={handlerClickCancel}
          >
            Cancelar
          </Button>

          <Button
            typeStyle={"btn-success"}
            type="submit"
            // onClick={handlerClickSubmit}
          >
            Salvar
          </Button>
        </div>
      </Form>
    </div>
  );
};
