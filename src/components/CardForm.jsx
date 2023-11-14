import React from "react";
import { useForm } from "react-hook-form";

function CardForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  function sendData(data) {
    console.log(data);
  }

  return (
    <form onSubmit={handleSubmit(sendData)} className="card-form">
      <div className="card-form__item">
        <label className="text-XS">Cardholder Name</label>
        <input
          {...register("name", { required: true })}
          className="input"
          type="text"
          placeholder="e.g. Jane Appleseed"
        ></input>
        {errors.name && <p className="error">Can’t be blank</p>}
      </div>
      <div className="card-form__item">
        <label className="text-XS">Card Number</label>
        <input
          {...register("cardNumber", { pattern: /\d+/ })}
          className="input"
          type="text"
          placeholder="e.g. 1234 5678 9123 0000"
        ></input>
        {errors.cardNumber && (
          <p className="error">Wrong format, numbers only</p>
        )}
      </div>
      <div className="card-form__item-box">
        <div className="card-form__item">
          <label className="text-XS">Exp. Date (MM/YY)</label>
          <div className="card-form__date-box">
            <input
              {...register("expireMonth", { required: true })}
              className="input"
              type="text"
              placeholder="MM"
            ></input>
            <input
              {...register("expireYear", { required: true })}
              className="input"
              type="text"
              placeholder="YY"
            ></input>
          </div>
          {errors.expireMonth && errors.expireYear && (
            <p className="error">Can’t be blank</p>
          )}
        </div>
        <div className="card-form__item">
          <label className="text-XS">CVC</label>
          <input
            {...register("cvcNumber", { required: true })}
            className="input"
            type="text"
            placeholder="e.g. 123"
          ></input>
          {errors.cvcNumber && <p className="error">Can’t be blank</p>}
        </div>
      </div>

      <button className="btn card-form__btn text-M" type="submit">
        Confirm
      </button>
    </form>
  );
}

export default CardForm;
