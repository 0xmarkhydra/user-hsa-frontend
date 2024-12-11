import React, { useState } from "react";

const useModalActiveBook = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [open, setOpen] = useState(false);

  const onOpenModal = () => {
    setOpen(true);
  };
  const onCloseModal = () => {
    setOpen(false);
  };

  const onSubmit = (data) => {
    setIsSubmitting(true);
    setTimeout(() => {
      console.log(data);
      setIsSubmitting(false);
      onCloseModal();
    }, 1000);
  };
  return { onSubmit, isSubmitting, onOpenModal, onCloseModal, open };
};

export default useModalActiveBook;
