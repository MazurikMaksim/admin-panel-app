import {createGlobalStyle} from "styled-components"

export const darkTheme = {
  blackBody: "#2B2D33",
  textColor: "#BCC4CC",
  panelColor: "#1F2629",
  textBlue: "#459df5",
}

export const lightTheme = {
  body: "#fff",
  textColor: "#000",
}

export const GlobalStyles = createGlobalStyle`
 body {
  background: ${props => props.theme.blackBody};
  color: ${props => props.theme.textColor};
 }
[class^="ModalForm_ListItem"] {
  color: ${props => props.theme.blackBody};
}
[class^="status-dropdown"], [class^="filter-dropdown"], [class^="ModalForm_input_field"], [class^="ModalForm_ListFooter"], .table__footer-dropdown {
  background-color: ${props => props.theme.blackBody};
  color: ${props => props.theme.textColor};
  cursor: pointer;
 }
 [class^="status-dropdown_item"]:hover, [class^="filter-dropdown_item"]:hover {
  background-color: ${props => props.theme.panelColor};
 }

[class^="ModalForm_table"] {
  background-color: ${props => props.theme.blackBody};
} 

 h1.page-header__text, .filter__input-title, [class^="ModalForm_input_title"], [class^="ModalForm_ListItemRow"] {
  color: ${props => props.theme.textColor};
 }
 .table__item-row, .filter__input-field::before, .filter__searchbar-area {
   color: ${props => props.theme.textColor} !important;
 }
.filter__wrapper:last-child, .table__footer {
  background-color: ${props => props.theme.panelColor};
}
.filter__input-field, .filter__searchbar-field, .filter-dropdown {
  background-color: ${props => props.theme.blackBody};
}
.table__item:hover, .table__item_checked {
  background-color: ${props => props.theme.blackBody};
}
.checkbox:checked + .svg-icon {
  fill: #459DF5;
}
.table__footer-button_blue, .filter-button {
  color: ${props => props.theme.blackBody};
}
.table__footer-button_blue .svg-icon, .filter-button .svg-icon {
  stroke: ${props => props.theme.blackBody};
  fill: ${props => props.theme.blackBody};
}
 .checkbox, .checkbox-group span, [class^="ModalForm_footer"] {
  background-color: ${props => props.theme.blackBody} !important;
}
  .text_blue {
    color: ${props => props.theme.textBlue};
  }
  .table__header-list, .table__header-item .svg-icon {
    color: ${props => props.theme.panelColor};
    fill: ${props => props.theme.panelColor};
  }
  [class^="ModalForm_input_icon"] {
    stroke: ${props => props.theme.textBlue};
    fill: ${props => props.theme.textBlue};
  }
  [class^="ModalForm_footer__button"] {
  border: 1px solid #459df5;
  }
`