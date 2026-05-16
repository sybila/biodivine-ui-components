import{i as m,a as b,x as s}from"./iframe-ELlrV13J.js";import{n as d,t as c}from"./property-CRxmFSUt.js";var p=Object.defineProperty,g=Object.getOwnPropertyDescriptor,y=(e,r,a)=>r in e?p(e,r,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[r]=a,o=(e,r,a,l)=>{for(var i=l>1?void 0:l?g(r,a):r,n=e.length-1,h;n>=0;n--)(h=e[n])&&(i=(l?h(r,a,i):h(i))||i);return l&&i&&p(r,a,i),i},v=(e,r,a)=>y(e,r+"",a);let t=class extends b{updateStyleVariable(e,r,a){const l=this[e]??a;this.style.setProperty(r,l)}updated(e){const r=(a,l,i)=>e.has(a)&&this.updateStyleVariable(a,l,i);r("compHeight","--value-slider-comp-height","25px"),r("compWidth","--value-slider-comp-width","100px"),r("bodyHeight","--value-slider-body-height","100%"),r("bodyWidth","--value-slider-body-width","100%"),r("bodyBackgroundColor","--value-slider-body-background-color","#d3d3d3"),r("bodyBorderRadius","--value-slider-body-border-radius","4px"),r("sliderThumbHeight","--value-slider-thumb-height","25px"),r("sliderThumbWidth","--value-slider-thumb-width","25px"),r("sliderThumbBackgroundColor","--value-slider-thumb-background-color","#3a568c"),r("sliderThumbBorderRadius","--value-slider-thumb-border-radius","4px")}changeHandler(e){if(this.handleChange){const r=Number(e.target.value);isNaN(r)||this.handleChange(r)}}inputHandler(e){if(this.handleInput){const r=Number(e.target.value);isNaN(r)||this.handleInput(r)}}render(){return s`
      <input
        id="slider"
        part="slider"
        type="range"
        .value=${this.value??0}
        .min=${this.minValue??0}
        .max=${this.maxValue??100}
        .step=${this.step??1}
        @change=${this.changeHandler}
        @input=${this.inputHandler}
      />
    `}};v(t,"styles",m`
    :host {
      display: inline-block;
      height: var(--value-slider-comp-height, 25px);
      width: var(--value-slider-comp-width, 100px);
      max-height: var(--value-slider-comp-height, 25px);
      max-width: var(--value-slider-comp-width, 100px);
    }

    #slider {
      -webkit-appearance: none; /* Override default CSS styles */
      appearance: none;
      width: var(--value-slider-body-width, 100%); /* Full-width */
      height: var(--value-slider-body-height, 100%); /* Specified height */
      background: var(
        --value-slider-body-background-color,
        #d3d3d3
      ); /* Grey background */
      outline: none; /* Remove outline */
      opacity: 0.7; /* Set transparency (for mouse-over effects on hover) */
      -webkit-transition: 0.2s; /* 0.2 seconds transition on hover */
      transition: opacity 0.2s;
      border-radius: var(--value-slider-body-border-radius, 4px);
    }

    /* Mouse-over effects */
    #slider:hover {
      opacity: 1; /* Fully shown on mouse-over */
    }

    /* The slider handle (use -webkit- (Chrome, Opera, Safari, Edge) and -moz- (Firefox) to override default look) */
    #slider::-webkit-slider-thumb {
      -webkit-appearance: none; /* Override default look */
      appearance: none;
      width: var(
        --value-slider-thumb-width,
        25px
      ); /* Set a specific slider handle width */
      height: var(--value-slider-thumb-height, 25px); /* Slider handle height */
      background: var(
        --value-slider-thumb-background-color,
        #3a568c
      ); /* Blue background */
      cursor: pointer; /* Cursor on hover */
      border-radius: var(--value-slider-thumb-border-radius, 4px);
    }

    #slider::-moz-range-thumb {
      width: var(
        --value-slider-thumb-width,
        25px
      ); /* Set a specific slider handle width */
      height: var(--value-slider-thumb-height, 25px); /* Slider handle height */
      background: var(
        --value-slider-thumb-background-color,
        #3a568c
      ); /* Blue background */
      cursor: pointer; /* Cursor on hover */
      border-radius: var(--value-slider-thumb-border-radius, 4px);
    }
  `);o([d({type:String})],t.prototype,"compHeight",2);o([d({type:String})],t.prototype,"compWidth",2);o([d({type:String})],t.prototype,"bodyHeight",2);o([d({type:String})],t.prototype,"bodyWidth",2);o([d({type:String})],t.prototype,"bodyBackgroundColor",2);o([d({type:String})],t.prototype,"bodyBorderRadius",2);o([d({type:String})],t.prototype,"sliderThumbHeight",2);o([d({type:String})],t.prototype,"sliderThumbWidth",2);o([d({type:String})],t.prototype,"sliderThumbBackgroundColor",2);o([d({type:String})],t.prototype,"sliderThumbBorderRadius",2);o([d({type:Function})],t.prototype,"handleChange",2);o([d({type:Function})],t.prototype,"handleInput",2);o([d({type:Number})],t.prototype,"value",2);o([d({type:Number})],t.prototype,"minValue",2);o([d({type:Number})],t.prototype,"maxValue",2);o([d({type:Number})],t.prototype,"step",2);t=o([c("value-slider")],t);const B={title:"Components/Non-Text Inputs/Value Slider",tags:["autodocs"],parameters:{docs:{description:{component:"\n### `<value-slider>`\n\nSlider input component.\n\n#### CSS Custom Properties\n\n| Variable                                   | Description                              |\n|---------------------------------------------|------------------------------------------|\n| `--value-slider-comp-height`              | Container height                         |\n| `--value-slider-comp-width`               | Container width                          |\n| `--value-slider-body-height`              | Slider body height                       |\n| `--value-slider-body-width`               | Slider body width                        |\n| `--value-slider-body-background-color`    | Slider body background color             |\n| `--value-slider-body-border-radius`       | Slider body border radius                |\n| `--value-slider-thumb-height`             | Slider thumb height                      |\n| `--value-slider-thumb-width`              | Slider thumb width                       |\n| `--value-slider-thumb-background-color`   | Slider thumb background color            |\n| `--value-slider-thumb-border-radius`      | Slider thumb border radius               |\n\n#### Shadow DOM Parts\n\n| Part Name   | Element    | Description                  |\n|-------------|------------|------------------------------|\n| `slider`    | `<input>`   | The range input element      |\n        "}}},argTypes:{compHeight:{control:"text",description:"Height of the outer component container",table:{category:"Layout",defaultValue:{summary:"25px"}}},compWidth:{control:"text",description:"Width of the outer component container",table:{category:"Layout",defaultValue:{summary:"100px"}}},bodyHeight:{control:"text",description:"Height of the slider body",table:{category:"Body",defaultValue:{summary:"100%"}}},bodyWidth:{control:"text",description:"Width of the slider body",table:{category:"Body",defaultValue:{summary:"100%"}}},bodyBackgroundColor:{control:"color",description:"Background color of the slider body",table:{category:"Body",defaultValue:{summary:"#d3d3d3"}}},bodyBorderRadius:{control:"text",description:"Border radius of the slider body",table:{category:"Body",defaultValue:{summary:"4px"}}},sliderThumbHeight:{control:"text",description:"Height of the slider thumb",table:{category:"Thumb",defaultValue:{summary:"25px"}}},sliderThumbWidth:{control:"text",description:"Width of the slider thumb",table:{category:"Thumb",defaultValue:{summary:"25px"}}},sliderThumbBackgroundColor:{control:"color",description:"Background color of the slider thumb",table:{category:"Thumb",defaultValue:{summary:"#3a568c"}}},sliderThumbBorderRadius:{control:"text",description:"Border radius of the slider thumb",table:{category:"Thumb",defaultValue:{summary:"4px"}}},value:{control:"number",description:"Current value of the slider",table:{category:"Value",defaultValue:{summary:"0"}}},minValue:{control:"number",description:"Minimum value of the slider",table:{category:"Value",defaultValue:{summary:"0"}}},maxValue:{control:"number",description:"Maximum value of the slider",table:{category:"Value",defaultValue:{summary:"100"}}},step:{control:"number",description:"Step value for the slider",table:{category:"Value",defaultValue:{summary:"1"}}},handleChange:{action:"changed",description:"Change event handler",table:{type:{summary:"(value: number) => void"},category:"Events"},control:!1},handleInput:{action:"input",description:"Input event handler",table:{type:{summary:"(value: number) => void"},category:"Events"},control:!1}}},u=e=>s`
  <value-slider
    .compHeight=${e.compHeight}
    .compWidth=${e.compWidth}
    .bodyHeight=${e.bodyHeight}
    .bodyWidth=${e.bodyWidth}
    .bodyBackgroundColor=${e.bodyBackgroundColor}
    .bodyBorderRadius=${e.bodyBorderRadius}
    .sliderThumbHeight=${e.sliderThumbHeight}
    .sliderThumbWidth=${e.sliderThumbWidth}
    .sliderThumbBackgroundColor=${e.sliderThumbBackgroundColor}
    .sliderThumbBorderRadius=${e.sliderThumbBorderRadius}
    .value=${e.value}
    .minValue=${e.minValue}
    .maxValue=${e.maxValue}
    .step=${e.step}
    .handleChange=${e.handleChange}
    .handleInput=${e.handleInput}
  ></value-slider>
`;u.args={compHeight:"25px",compWidth:"200px",bodyHeight:"100%",bodyWidth:"100%",bodyBackgroundColor:"#d3d3d3",bodyBorderRadius:"4px",sliderThumbHeight:"25px",sliderThumbWidth:"25px",sliderThumbBackgroundColor:"#3a568c",sliderThumbBorderRadius:"4px",value:0,minValue:0,maxValue:100,step:1,handleChange:e=>console.log("Change event:",e),handleInput:e=>console.log("Input event:",e)};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`args => html\`
  <value-slider
    .compHeight=\${args.compHeight}
    .compWidth=\${args.compWidth}
    .bodyHeight=\${args.bodyHeight}
    .bodyWidth=\${args.bodyWidth}
    .bodyBackgroundColor=\${args.bodyBackgroundColor}
    .bodyBorderRadius=\${args.bodyBorderRadius}
    .sliderThumbHeight=\${args.sliderThumbHeight}
    .sliderThumbWidth=\${args.sliderThumbWidth}
    .sliderThumbBackgroundColor=\${args.sliderThumbBackgroundColor}
    .sliderThumbBorderRadius=\${args.sliderThumbBorderRadius}
    .value=\${args.value}
    .minValue=\${args.minValue}
    .maxValue=\${args.maxValue}
    .step=\${args.step}
    .handleChange=\${args.handleChange}
    .handleInput=\${args.handleInput}
  ></value-slider>
\``,...u.parameters?.docs?.source}}};const V=["Default"];export{u as Default,V as __namedExportsOrder,B as default};
