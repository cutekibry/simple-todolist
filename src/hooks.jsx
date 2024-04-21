import { useImmer } from "use-immer";
import { useEffect } from "react";

export function useLocalStorage(name, initial) {
  const info = JSON.parse(localStorage.getItem(name));
  const [variable, updateVariable] = useImmer(info || initial);

  useEffect(() => {
    localStorage.setItem(name, JSON.stringify(variable));
  }, [variable])

  return [variable, updateVariable];
}

export function useTextInput(name, initial) {
  const [text, updateText] = useLocalStorage(name, initial);
  const handleChange = e => updateText(e.target.value);
  return [text, updateText, handleChange];
}
export function useTextInputWithEnter(name, initial, callback) {
  const [text, updateText, handleChange] = useTextInput(name, initial);

  function handleKeyDown(e) {
    if (e.key === "Enter")
      callback();
  }

  return [text, updateText, handleChange, handleKeyDown];
}

export function useCheckboxInput(name, initial, callback) {
  const [checkbox, updateCheckbox] = useLocalStorage(name, initial);

  function handleChange(e) {
    console.log(e.target.value);
  }

  return [checkbox, updateCheckbox, handleChange];
}