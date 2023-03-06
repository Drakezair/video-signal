import { signal, computed, effect, batch } from "@preact/signals-react";

const count = signal(0);
const doubleCount = computed(() => count.value * 2);

effect(() => console.log("el valor de count es: ", count.value));

const name = signal("Luis");
const age = signal(23);

const updateInfo = () =>
  batch(() => {
    name.value = "Eduardo";
    age.value = 24;
  });

export default function App() {
  return (
    <>
      <button onClick={updateInfo}>
        Hola soy {name.value} y tengo {age.value} años de edad
      </button>
      <button onClick={() => count.value++}>
        el valor es: {count.value}, doble count es: {doubleCount.value}
      </button>
    </>
  );
}
