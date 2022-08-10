import { CarDetails } from "./form.js";

export function App() {

  return (
    <div>
      <CarDetails defaultData={{defaultModel: "Toyota", defaultYear: 2000, defaultColor: "grey"}} />
    </div>
  )
}
