import { h, render } from "preact";
import { SpecialsContainer } from "./Components/SpecialsContainer";

function startWebSpecials() {
    render( <SpecialsContainer/>, document.getElementById("tc_webspecials") );
}

window["wsRunner"] = startWebSpecials;