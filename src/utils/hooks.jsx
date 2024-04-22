import { useImmer } from "use-immer";
import { useEffect } from "react";

export function useLocalStorage({ name, initial }) {
  if (typeof name !== "string")
    throw TypeError(`Argument name (= ${name}) should be a string.`);

  const info = JSON.parse(localStorage.getItem(name));
  const [variable, updateVariable] = useImmer(info || initial);

  useEffect(() => {
    localStorage.setItem(name, JSON.stringify(variable));
  }, [variable, name]);

  return [variable, updateVariable];
}

export function useTextInput({ name, initial }) {
  const [text, updateText] = useLocalStorage({ name: name, initial: initial });
  const handleChange = (e) => updateText(e.target.value);
  return [text, updateText, handleChange];
}
export function useTextInputWithEnter({ name, initial, callback }) {
  const [text, updateText, handleChange] = useTextInput({
    name: name,
    initial: initial,
  });

  function handleKeyDown(e) {
    if (e.key === "Enter") callback();
  }

  return [text, updateText, handleChange, handleKeyDown];
}
