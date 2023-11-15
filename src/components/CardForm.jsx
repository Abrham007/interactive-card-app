import React, { useState } from "react";
import { useForm } from "react-hook-form";

function CardForm(props) {
  const inputError = {
    border: "1px solid #FF5050",
  };
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  return (
    <form onSubmit={handleSubmit(props.onSubmit)} className="card-form">
      <div className="card-form__item">
        <label className="card-form__label text-XS">Cardholder Name</label>
        <input
          {...register("name", { required: true })}
          id="name"
          name="name"
          className="input text-M"
          type="text"
          placeholder="e.g. Jane Appleseed"
          style={errors.name && inputError}
        ></input>
        {errors.name && <p className="error">Can’t be blank</p>}
      </div>
      <div className="card-form__item">
        <label className="card-form__label text-XS">Card Number</label>
        <input
          {...register("cardNumber")}
          id="cardNumber"
          name="cardNumber"
          className="input text-M"
          type="text"
          placeholder="e.g. 1234 5678 9123 0000"
          style={errors.cardNumber && inputError}
        ></input>

        {errors.cardNumber && (
          <p className="error">Wrong format, numbers only</p>
        )}
      </div>
      <div className="card-form__item-box">
        <div className="card-form__item">
          <label className="card-form__label text-XS">Exp. Date (MM/YY)</label>
          <div className="card-form__date-box">
            <input
              {...register("expireMonth", { required: true })}
              id="expireMonth"
              name="expireMonth"
              className="input text-M"
              type="text"
              placeholder="MM"
              style={errors.expireMonth && inputError}
            ></input>
            <input
              {...register("expireYear", { required: true })}
              id="expireYear"
              name="expireYear"
              className="input text-M"
              type="text"
              placeholder="YY"
              style={errors.expireYear && inputError}
            ></input>
          </div>
          {errors.expireMonth && errors.expireYear && (
            <p className="error">Can’t be blank</p>
          )}
        </div>
        <div className="card-form__item">
          <label className="card-form__label text-XS">CVC</label>
          <input
            {...register("cvcNumber", { required: true })}
            id="cvcNumber"
            name="cvcNumber"
            className="input text-M"
            type="text"
            placeholder="e.g. 123"
            style={errors.cvcNumber && inputError}
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
