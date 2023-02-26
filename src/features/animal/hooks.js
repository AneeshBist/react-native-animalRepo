import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import * as actions from "./reducers";

export const useUpdateFields = () => {
  const dispatch = useDispatch();
  const fields = useSelector((state) => state.animal.form.fields);

  return {
    fields,
    setFormField: (field, value) => {
      console.log(`Updating field ${field} to ${value}`);
      return dispatch(actions.setFormField({ field, value }));
    },
  };
};

export const useNewAnimal = () => {
  const dispatch = useDispatch();

  return {
    onSubmit: () => {
      console.log("Dispatching CREATE_ANIMAL action");
      dispatch(actions.createAnimal());
    },
  };
};

export const useListAnimals = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(actions.loadAnimals());
  }, [dispatch]);

  return useSelector((state) => state.animal.list.animals);
};
export const useCreateAnimalStatus = () => {
  return useSelector((state) => state.animal.create.status);
};

export const useEditAnimal = (animalID) => {
  const dispatch = useDispatch();
  const status = useEditAnimalStatus();

  return {
    status,
    onSubmit: () => {
      console.log("Dispatching EDIT_ANIMAL action");
      dispatch(actions.editAnimal(animalID));
    },
  };
};

export const useEditAnimalStatus = () => {
  return useSelector((state) => state.animal.edit.status);
};

export const useResetForm = () => {};
