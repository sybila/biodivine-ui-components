import{i as h,a as x,x as p}from"./iframe-4f8jCZ-N.js";import{n as o,t as f}from"./property-BTWXHwnk.js";var d=Object.defineProperty,m=Object.getOwnPropertyDescriptor,y=(t,e,n)=>e in t?d(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n,s=(t,e,n,u)=>{for(var g=u>1?void 0:u?m(e,n):e,r=t.length-1,a;r>=0;r--)(a=t[r])&&(g=(u?a(e,n,g):a(g))||g);return u&&g&&d(e,n,g),g},v=(t,e,n)=>y(t,e+"",n);let i=class extends x{isFocused=!1;isMouseDownOnSuggestion=!1;writeHandler(t){const e=t.target.value;this.onWrite&&this.onWrite(e),this.value=e}submitHandler(t){t.key==="Enter"&&this.onSubmit&&this.onSubmit(t.target.value)}updateStyleVariable(t,e,n){const u=this[t]??n;this.style.setProperty(e,u)}findLastChar(t,e){for(let n=t.length-1;n>=0;n--)if(e(t[n]))return n}selectSuggestion(t){let e=t;if(this.isSeparator){const n=this.value??"",u=this.findLastChar(n,this.isSeparator);u!==void 0&&(e=n.slice(0,u+1)+" "+t)}this.value=e,this.isFocused=!1,this.requestUpdate(),this.onWrite?.(this.value??"")}splitByPredicate(t,e){if(!t||t.length===0)return[""];const n=[];let u=!1,g="";for(const r of t)e(r)?(u=!0,g&&n.push(g),g=""):(u=!1,g+=r);return(g||u)&&n.push(g),n}get filteredSuggestions(){if(!this.isFocused||!this.suggestionStrings)return[];const t=this.filterSuggTextTransform??(r=>r.toLowerCase().trim()),e=this.value??"",n=this.isSeparator?this.splitByPredicate(e,this.isSeparator).map(r=>t(r)):[t(e)];if(!n||n.length<1)return this.suggestionStrings;const u=new Set(n.slice(0,n.length-1)),g=this.filterSuggPredicate?this.filterSuggPredicate:(r,a,c)=>!c.has(r)&&r.includes(a[a.length-1]);return this.suggestionStrings.filter(r=>g(t(r),n,u))}async focus(){await this.updateComplete,this.renderRoot?.querySelector("input")?.focus()}handleFocus(){this.isFocused=!0,this.requestUpdate()}handleBlur(){setTimeout(()=>{this.isMouseDownOnSuggestion||(this.isFocused=!1,this.requestUpdate())},100)}updated(t){const e=(n,u,g)=>t.has(n)&&this.updateStyleVariable(n,u,g);e("inputHeight","--text-input-suggestions-height","26px"),e("inputWidth","--text-input-suggestions-width","500px"),e("inputBorderColor","--text-input-suggestions-border-color","#cfd8dc"),e("inputBorderRadius","--text-input-suggestions-border-radius","8px"),e("inputColor","--text-input-suggestions-background-color","#fafafa"),e("textColor","--text-input-suggestions-text-color","#333"),e("textFontSize","--text-input-suggestions-input-font-size","14px"),e("textFontWeight","--text-input-suggestions-input-font-weight","normal"),e("textFontFamily","--text-input-suggestions-input-font-family","'Helvetica', 'Arial', sans-serif"),e("componentZIndex","--text-input-suggestions-z-index","100"),e("containerGap","--text-input-suggestions-gap","3px"),e("suggListMinHeight","--text-input-suggestions-sugg-list-min-height","16px"),e("suggListMaxHeight","--text-input-suggestions-sugg-list-max-height","200px"),e("suggListWidth","--text-input-suggestions-sugg-list-width","495px"),e("suggListBorderRadius","--text-input-suggestions-sugg-list-border-radius","15px"),e("suggListBgColor","--text-input-suggestions-sugg-list-bg-color","#eceff1"),e("suggListOverflowY","--text-input-suggestions-sugg-list-overflow-y","auto"),e("suggLineHeight","--text-input-suggestions-sugg-line-height","28px"),e("suggFontSize","--text-input-suggestions-sugg-font-size","18px"),e("suggFontWeight","--text-input-suggestions-sugg-font-weight","normal"),e("suggFontFamily","--text-input-suggestions-sugg-font-family","'Helvetica', 'Arial', sans-serif"),e("suggItemBorderRadius","--text-input-suggestions-sugg-border-radius","15px"),e("suggPadding","--text-input-suggestions-sugg-padding","6px 10px"),e("suggHoverBgColor","--text-input-suggestions-sugg-hover-bg-color","white")}render(){return p`
      <div id="container" part="container">
        <input
          @focus=${()=>this.handleFocus()}
          @blur=${()=>this.handleBlur()}
          @mouseenter=${t=>{this.onInputMouseEnter&&this.onInputMouseEnter(t)}}
          @mouseleave=${t=>{this.onInputMouseLeave&&this.onInputMouseLeave(t)}}
          @keyup=${t=>this.writeHandler(t)}
          @keydown=${t=>this.submitHandler(t)}
          type="text"
          placeholder=${this.placeholder??""}
          .value=${this.value??""}
          id="text-input"
          part="text-input"
        />

        ${this.filteredSuggestions.length?p`
              <ul id="suggestions-list" part="suggestions-list">
                ${this.filteredSuggestions.map(t=>p`
                    <li
                      @click=${()=>this.selectSuggestion(t)}
                      @mousedown=${()=>this.isMouseDownOnSuggestion=!0}
                      @mouseup=${()=>this.isMouseDownOnSuggestion=!1}
                      @mouseenter=${e=>{this.onSuggestionMouseEnter&&this.onSuggestionMouseEnter(e,t)}}
                      @mouseleave=${e=>{this.onSuggestionMouseLeave&&this.onSuggestionMouseLeave(e,t)}}
                    >
                      ${t}
                    </li>
                  `)}
              </ul>
            `:null}
      </div>
    `}};v(i,"styles",h`
    :host {
      display: block;
      height: var(--text-input-suggestions-height, 26px);
      width: var(--text-input-suggestions-width, 500px);
      overflow: visible;
      z-index: var(--text-input-suggestions-z-index, 100);
    }

    #container {
      display: flex;
      flex-direction: column;
      height: fit-content;
      width: fit-content;
      align-items: center;
      justify-content: start;
      gap: var(--text-input-suggestions-gap, 3px);
    }

    #text-input {
      display: block;
      height: var(--text-input-suggestions-height, 26px);
      width: var(--text-input-suggestions-width, 500px);
      box-sizing: border-box;
      border-color: var(--text-input-suggestions-border-color, #cfd8dc);
      border-radius: var(--text-input-suggestions-border-radius, 8px);
      background-color: var(--text-input-suggestions-background-color, #fafafa);
      color: var(--text-input-suggestions-text-color, #333);
      font-size: var(--text-input-suggestions-input-font-size, 14px);
      font-weight: var(--text-input-suggestions-input-font-weight, normal);
      font-family: var(
        --text-input-suggestions-input-font-family,
        'Helvetica',
        'Arial',
        sans-serif
      );
    }

    #suggestions-list {
      display: block;
      min-height: var(--text-input-suggestions-sugg-list-min-height, 16px);
      max-height: var(--text-input-suggestions-sugg-list-max-height, 200px);
      width: var(--text-input-suggestions-sugg-list-width, 495px);
      border-radius: var(
        --text-input-suggestions-sugg-list-border-radius,
        15px
      );
      background-color: var(
        --text-input-suggestions-sugg-list-bg-color,
        #eceff1
      );
      border: 1px solid #ddd;
      margin: 0;
      padding: 0;
      list-style: none;
      overflow-x: hidden;
      overflow-y: var(--text-input-suggestions-sugg-list-overflow-y, auto);
    }

    #suggestions-list li {
      height: fit-content;
      width: 100%;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
      box-sizing: border-box;
      line-height: var(--text-input-suggestions-sugg-line-height, 28px);
      font-size: var(--text-input-suggestions-sugg-font-size, 18px);
      font-weight: var(--text-input-suggestions-sugg-font-weight, normal);
      font-family: var(
        --text-input-suggestions-sugg-font-family,
        'Helvetica',
        'Arial',
        sans-serif
      );

      border-radius: var(--text-input-suggestions-sugg-border-radius, 15px);
      padding: var(--text-input-suggestions-sugg-padding, 6px 10px);
      cursor: pointer;
    }

    #suggestions-list li:hover {
      background-color: var(
        --text-input-suggestions-sugg-hover-bg-color,
        white
      );
    }
  `);s([o({type:String})],i.prototype,"inputHeight",2);s([o({type:String})],i.prototype,"inputWidth",2);s([o({type:String})],i.prototype,"inputBorderColor",2);s([o({type:String})],i.prototype,"inputBorderRadius",2);s([o({type:String})],i.prototype,"inputColor",2);s([o({type:Function})],i.prototype,"onWrite",2);s([o({type:Function})],i.prototype,"onSubmit",2);s([o({type:Function})],i.prototype,"onInputMouseEnter",2);s([o({type:Function})],i.prototype,"onInputMouseLeave",2);s([o({type:Function})],i.prototype,"onSuggestionMouseEnter",2);s([o({type:Function})],i.prototype,"onSuggestionMouseLeave",2);s([o({type:String})],i.prototype,"textColor",2);s([o({type:String})],i.prototype,"textFontSize",2);s([o({type:String})],i.prototype,"textFontWeight",2);s([o({type:String})],i.prototype,"textFontFamily",2);s([o({type:String})],i.prototype,"componentZIndex",2);s([o({type:String})],i.prototype,"containerGap",2);s([o({type:String})],i.prototype,"suggListMinHeight",2);s([o({type:String})],i.prototype,"suggListMaxHeight",2);s([o({type:String})],i.prototype,"suggListWidth",2);s([o({type:String})],i.prototype,"suggListBorderRadius",2);s([o({type:String})],i.prototype,"suggListBgColor",2);s([o({type:String})],i.prototype,"suggListOverflowY",2);s([o({type:String})],i.prototype,"suggLineHeight",2);s([o({type:String})],i.prototype,"suggFontSize",2);s([o({type:String})],i.prototype,"suggFontWeight",2);s([o({type:String})],i.prototype,"suggFontFamily",2);s([o({type:String})],i.prototype,"suggItemBorderRadius",2);s([o({type:String})],i.prototype,"suggPadding",2);s([o({type:String})],i.prototype,"suggHoverBgColor",2);s([o({type:Function})],i.prototype,"filterSuggPredicate",2);s([o({type:Function})],i.prototype,"filterSuggTextTransform",2);s([o({type:Function})],i.prototype,"isSeparator",2);s([o({type:String})],i.prototype,"placeholder",2);s([o({type:String})],i.prototype,"value",2);s([o({type:Array})],i.prototype,"suggestionStrings",2);i=s([f("text-input-suggestions")],i);const F={title:"Components/Text/Text Input With Suggestions",tags:["autodocs"],parameters:{docs:{description:{component:`
### \`<text-input-suggestions>\`

Text input component with suggestion list.

#### CSS Custom Properties

### Layout & Component

| Variable | Description |
|----------|-------------|
| \`--text-input-suggestions-height\` | Height of the input field and host wrapper (Accepts only explicit length values (e.g. px). Relative or intrinsic values such as % or fit-content are not supported.) |
| \`--text-input-suggestions-width\` | Width of the input field and host wrapper (Accepts only explicit length values (e.g. px). Relative or intrinsic values such as % or fit-content are not supported.)|
| \`--text-input-suggestions-z-index\` | Z-index of the entire component |
| \`--text-input-suggestions-gap\` | Gap between input field and suggestion list |

---

### Input field styles

| Variable | Description |
|----------|-------------|
| \`--text-input-suggestions-border-color\` | Border color of the input field |
| \`--text-input-suggestions-border-radius\` | Border radius of the input field |
| \`--text-input-suggestions-background-color\` | Background color of the input field |
| \`--text-input-suggestions-text-color\` | Text color inside the input field |
| \`--text-input-suggestions-input-font-size\` | Font size of input text |
| \`--text-input-suggestions-input-font-weight\` | Font weight of input text |
| \`--text-input-suggestions-input-font-family\` | Font family of input text |

---

### Suggestion list styles

| Variable | Description |
|----------|-------------|
| \`--text-input-suggestions-sugg-list-min-height\` | Minimum height of the suggestion list (Accepts only explicit length values (e.g. px). Relative or intrinsic values such as % or fit-content are not supported.) |
| \`--text-input-suggestions-sugg-list-max-height\` | Maximum height of the suggestion list (Accepts only explicit length values (e.g. px). Relative or intrinsic values such as % or fit-content are not supported.) |
| \`--text-input-suggestions-sugg-list-width\` | Width of the suggestion list (Accepts only explicit length values (e.g. px). Relative or intrinsic values such as % or fit-content are not supported.) |
| \`--text-input-suggestions-sugg-list-border-radius\` | Border radius of the suggestion list |
| \`--text-input-suggestions-sugg-list-bg-color\` | Background color of the suggestion list |
| \`--text-input-suggestions-sugg-list-overflow-y\` | Vertical overflow behavior of the suggestion list |

---

### Suggestion item styles

| Variable | Description |
|----------|-------------|
| \`--text-input-suggestions-sugg-line-height\` | Line height of each suggestion item |
| \`--text-input-suggestions-sugg-font-size\` | Font size of suggestion items |
| \`--text-input-suggestions-sugg-font-weight\` | Font weight of suggestion items |
| \`--text-input-suggestions-sugg-font-family\` | Font family of suggestion items |
| \`--text-input-suggestions-sugg-border-radius\` | Border radius of suggestion items |
| \`--text-input-suggestions-sugg-padding\` | Padding inside suggestion items |
| \`--text-input-suggestions-sugg-hover-bg-color\` | Background color when hovering a suggestion item |

#### Shadow DOM Parts

| Part Name | Element | Description |
|----------|---------|-------------|
| \`container\` | \`div\` | Outer wrapper container |
| \`text-input\` | \`input\` | The input element |
| \`suggestions-list\` | \`ul\` | Suggestion list container |

#### Methods

| Method | Description |
|--------|-------------|
| \`focus()\` | Focuses the internal input element |
        `}}},argTypes:{inputHeight:{control:"text",description:"Height of the input box",table:{category:"Input",defaultValue:{summary:"26px"}}},inputWidth:{control:"text",description:"Width of the input box",table:{category:"Input",defaultValue:{summary:"500px"}}},inputBorderColor:{control:"color",description:"Border color of the input box",table:{category:"Input",defaultValue:{summary:"#cfd8dc"}}},inputBorderRadius:{control:"text",description:"Border radius of the input box",table:{category:"Input",defaultValue:{summary:"8px"}}},inputColor:{control:"color",description:"Background color of the input box",table:{category:"Input",defaultValue:{summary:"#fafafa"}}},textColor:{control:"color",description:"Text color inside input",table:{category:"Text",defaultValue:{summary:"#333"}}},textFontSize:{control:"text",description:"Font size of input text",table:{category:"Text",defaultValue:{summary:"14px"}}},textFontWeight:{control:"text",description:"Font weight of input text",table:{category:"Text",defaultValue:{summary:"normal"}}},textFontFamily:{control:"text",description:"Font family of input text",table:{category:"Text",defaultValue:{summary:"'Helvetica', 'Arial', sans-serif"}}},placeholder:{control:"text",description:"Placeholder text inside the input",table:{category:"Input",defaultValue:{summary:""}}},value:{control:"text",description:"Controlled value of the input",table:{category:"Input",defaultValue:{summary:""}}},suggestionStrings:{control:"object",description:"Array of available suggestion strings. Suggestions are filtered according to the current input and filtering configuration.",table:{category:"Suggestions",type:{summary:"string[]"}}},filterSuggPredicate:{control:!1,description:`Custom filtering function for suggestions.

inputTokens is the user input split by isSeparator into an array of tokens.
All tokens except the last represent committed input (already "accepted" parts).
The last token represents the currently typed (active) fragment used for matching suggestions.

selectedSuggestions contains only confirmed selections (e.g. chosen chips/tags) and never includes the currently typed last token.

Return true to display a suggestion, false to hide it.`,table:{category:"Suggestions",type:{summary:"(suggestion: string, inputTokens: string[], selectedSuggestions: Set<string>) => boolean"},defaultValue:{summary:"(suggestion, inputTokens, selectedSuggestions) => !selectedSuggestions.has(suggestion) && suggestion.includes(inputTokens[inputTokens.length - 1])"}}},filterSuggTextTransform:{control:!1,description:`Transforms text before filtering is applied.

This is used to normalize both suggestions and input tokens (e.g. lowercasing, trimming whitespace) so matching is consistent and case-insensitive.`,table:{category:"Suggestions",type:{summary:"(text: string) => string"},defaultValue:{summary:"(text) => text.toLowerCase().trim()"}}},isSeparator:{control:!1,description:`Function that determines which characters split the input into tokens.

When a separator is encountered, the input is divided into multiple tokens.
Filtering logic always uses only the last token (the active typing fragment).`,table:{category:"Suggestions",type:{summary:"(char: string) => boolean"}}},componentZIndex:{control:"text",description:"Z-index of the component",table:{category:"Layout",defaultValue:{summary:"100"}}},containerGap:{control:"text",description:"Gap between input and suggestion list",table:{category:"Layout",defaultValue:{summary:"3px"}}},suggListMinHeight:{control:"text",description:"Minimum height of suggestion list",table:{category:"Suggestions",defaultValue:{summary:"16px"}}},suggListMaxHeight:{control:"text",description:"Maximum height of suggestion list",table:{category:"Suggestions",defaultValue:{summary:"200px"}}},suggListWidth:{control:"text",description:"Width of suggestion list",table:{category:"Suggestions",defaultValue:{summary:"495px"}}},suggListBorderRadius:{control:"text",description:"Border radius of suggestion list",table:{category:"Suggestions",defaultValue:{summary:"15px"}}},suggListBgColor:{control:"color",description:"Background color of suggestion list",table:{category:"Suggestions",defaultValue:{summary:"#eceff1"}}},suggListOverflowY:{control:"text",description:"Overflow behavior for suggestion list",table:{category:"Suggestions",defaultValue:{summary:"auto"}}},suggLineHeight:{control:"text",description:"Line height of suggestion items",table:{category:"Suggestions",defaultValue:{summary:"28px"}}},suggFontSize:{control:"text",description:"Font size of suggestion items",table:{category:"Suggestions",defaultValue:{summary:"18px"}}},suggFontWeight:{control:"text",description:"Font weight of suggestion items",table:{category:"Suggestions",defaultValue:{summary:"normal"}}},suggFontFamily:{control:"text",description:"Font family of suggestion items",table:{category:"Suggestions",defaultValue:{summary:"'Helvetica', 'Arial', sans-serif"}}},suggItemBorderRadius:{control:"text",description:"Border radius of suggestion items",table:{category:"Suggestions",defaultValue:{summary:"15px"}}},suggPadding:{control:"text",description:"Padding of suggestion items",table:{category:"Suggestions",defaultValue:{summary:"6px 10px"}}},suggHoverBgColor:{control:"color",description:"Hover background color of suggestion items",table:{category:"Suggestions",defaultValue:{summary:"white"}}},onInputMouseEnter:{control:!1,description:"Callback fired when the mouse enters the text-input element. Receives the native MouseEvent.",table:{category:"Events",type:{summary:"(event: MouseEvent) => void"}},action:"input mouse enter"},onInputMouseLeave:{control:!1,description:"Callback fired when the mouse leaves the text-input element. Receives the native MouseEvent.",table:{category:"Events",type:{summary:"(event: MouseEvent) => void"}},action:"input mouse leave"},onSuggestionMouseEnter:{control:!1,description:"Callback fired when the mouse enters a suggestion item. Receives the MouseEvent and the suggestion string being hovered.",table:{category:"Events",type:{summary:"(event: MouseEvent, suggestion: string) => void"}},action:"suggestion mouse enter"},onSuggestionMouseLeave:{control:!1,description:"Callback fired when the mouse leaves a suggestion item. Receives the MouseEvent and the suggestion string being left.",table:{category:"Events",type:{summary:"(event: MouseEvent, suggestion: string) => void"}},action:"suggestion mouse leave"},onWrite:{action:"write",description:"Called whenever the input value changes, including when a suggestion is selected. Receives the current value.",table:{category:"Events",type:{summary:"(value: string) => void"}}},onSubmit:{action:"submit",description:"Called when Enter is pressed. Receives the current input value.",table:{category:"Events",type:{summary:"(value: string) => void"}}}}},l=t=>p`
  <text-input-suggestions
    .inputHeight=${t.inputHeight}
    .inputWidth=${t.inputWidth}
    .inputBorderColor=${t.inputBorderColor}
    .inputBorderRadius=${t.inputBorderRadius}
    .inputColor=${t.inputColor}
    .textColor=${t.textColor}
    .textFontSize=${t.textFontSize}
    .textFontWeight=${t.textFontWeight}
    .textFontFamily=${t.textFontFamily}
    .placeholder=${t.placeholder}
    .value=${t.value}
    .suggestionStrings=${t.suggestionStrings}
    .filterSuggPredicate=${t.filterSuggPredicate}
    .filterSuggTextTransform=${t.filterSuggTextTransform}
    .isSeparator=${t.isSeparator}
    .componentZIndex=${t.componentZIndex}
    .containerGap=${t.containerGap}
    .suggListMinHeight=${t.suggListMinHeight}
    .suggListMaxHeight=${t.suggListMaxHeight}
    .suggListWidth=${t.suggListWidth}
    .suggListBorderRadius=${t.suggListBorderRadius}
    .suggListBgColor=${t.suggListBgColor}
    .suggListOverflowY=${t.suggListOverflowY}
    .suggLineHeight=${t.suggLineHeight}
    .suggFontSize=${t.suggFontSize}
    .suggFontWeight=${t.suggFontWeight}
    .suggFontFamily=${t.suggFontFamily}
    .suggItemBorderRadius=${t.suggItemBorderRadius}
    .suggPadding=${t.suggPadding}
    .suggHoverBgColor=${t.suggHoverBgColor}
    .onWrite=${t.onWrite}
    .onSubmit=${t.onSubmit}
    .onInputMouseEnter=${t.onInputMouseEnter}
    .onInputMouseLeave=${t.onInputMouseLeave}
    .onSuggestionMouseEnter=${t.onSuggestionMouseEnter}
    .onSuggestionMouseLeave=${t.onSuggestionMouseLeave}
  ></text-input-suggestions>
`;l.args={inputHeight:"26px",inputWidth:"500px",inputBorderColor:"#cfd8dc",inputBorderRadius:"8px",inputColor:"#fafafa",textColor:"#333",textFontSize:"14px",textFontWeight:"normal",textFontFamily:"'Helvetica', 'Arial', sans-serif",placeholder:"Enter text...",value:"",suggestionStrings:["suggestion 1","suggestion 2"],filterSuggTextTransform:t=>t.toLowerCase(),isSeparator:void 0,componentZIndex:"100",containerGap:"3px",suggListMinHeight:"16px",suggListMaxHeight:"200px",suggListWidth:"495px",suggListBorderRadius:"15px",suggListBgColor:"#eceff1",suggListOverflowY:"auto",suggLineHeight:"28px",suggFontSize:"18px",suggFontWeight:"normal",suggFontFamily:"'Helvetica', 'Arial', sans-serif",suggItemBorderRadius:"15px",suggPadding:"6px 10px",suggHoverBgColor:"white",onWrite:t=>console.log("Write:",t),onSubmit:t=>console.log("Submit:",t),onInputMouseEnter:t=>console.log("Input enter:",t),onInputMouseLeave:t=>console.log("Input leave:",t),onSuggestionMouseEnter:(t,e)=>console.log("Suggestion enter:",e,t),onSuggestionMouseLeave:(t,e)=>console.log("Suggestion leave:",e,t)};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`args => html\`
  <text-input-suggestions
    .inputHeight=\${args.inputHeight}
    .inputWidth=\${args.inputWidth}
    .inputBorderColor=\${args.inputBorderColor}
    .inputBorderRadius=\${args.inputBorderRadius}
    .inputColor=\${args.inputColor}
    .textColor=\${args.textColor}
    .textFontSize=\${args.textFontSize}
    .textFontWeight=\${args.textFontWeight}
    .textFontFamily=\${args.textFontFamily}
    .placeholder=\${args.placeholder}
    .value=\${args.value}
    .suggestionStrings=\${args.suggestionStrings}
    .filterSuggPredicate=\${args.filterSuggPredicate}
    .filterSuggTextTransform=\${args.filterSuggTextTransform}
    .isSeparator=\${args.isSeparator}
    .componentZIndex=\${args.componentZIndex}
    .containerGap=\${args.containerGap}
    .suggListMinHeight=\${args.suggListMinHeight}
    .suggListMaxHeight=\${args.suggListMaxHeight}
    .suggListWidth=\${args.suggListWidth}
    .suggListBorderRadius=\${args.suggListBorderRadius}
    .suggListBgColor=\${args.suggListBgColor}
    .suggListOverflowY=\${args.suggListOverflowY}
    .suggLineHeight=\${args.suggLineHeight}
    .suggFontSize=\${args.suggFontSize}
    .suggFontWeight=\${args.suggFontWeight}
    .suggFontFamily=\${args.suggFontFamily}
    .suggItemBorderRadius=\${args.suggItemBorderRadius}
    .suggPadding=\${args.suggPadding}
    .suggHoverBgColor=\${args.suggHoverBgColor}
    .onWrite=\${args.onWrite}
    .onSubmit=\${args.onSubmit}
    .onInputMouseEnter=\${args.onInputMouseEnter}
    .onInputMouseLeave=\${args.onInputMouseLeave}
    .onSuggestionMouseEnter=\${args.onSuggestionMouseEnter}
    .onSuggestionMouseLeave=\${args.onSuggestionMouseLeave}
  ></text-input-suggestions>
\``,...l.parameters?.docs?.source}}};const $=["Default"];export{l as Default,$ as __namedExportsOrder,F as default};
