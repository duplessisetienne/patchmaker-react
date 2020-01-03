import React from "react";
import "primereact/resources/themes/luna-amber/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";
import { InputText } from "primereact/inputtext";
import { InputTextarea } from "primereact/inputtextarea";

export default class Patch extends React.Component {
  constructor() {
    super();
    this.state = {
      value: null
    };
  }

  toggle() {
    this.setState({ disabled: !this.state.disabled });
  }
  render() {
    return (
      <body className="App">
        <div className="App">
          <form name="patchdetails">
            <div>
              <InputText
                style={{ marginLeft: 50 }}
                id="patchnumber"
                size="30"
                class="p-inputtext p-component"
                placeholder="Patch Number"
                keyfilter="num"
              ></InputText>

              <InputText
                style={{ marginLeft: 50 }}
                id="patchname"
                type="text"
                size="30"
                class="p-inputtext p-component"
                placeholder="Patch Name"
              ></InputText>
            </div>
            <br />
            <br />
            <div>
              <InputTextarea
                style={{ marginLeft: 50 }}
                rows={5}
                cols={50}
                value={this.state.value}
                onChange={e => this.setState({ value: e.target.value })}
                autoResize={true}
                placeholder="Give your patch a description"
              />
            </div>
          </form>
        </div>
      </body>
    );
  }
}
