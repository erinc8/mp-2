"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UniversityPreview = UniversityPreview;
const styled_components_1 = __importDefault(require("styled-components"));
const UniversityPreviewDiv = styled_components_1.default.div `
    margin: auto;
    padding: 1rem;
    width: 20rem;
    background-color: darkslategrey;
`;
function UniversityPreview({ university }) {
    return (<UniversityPreviewDiv>
            <h3>{university.name}</h3>
            <p>Webpage: {university.web_pages[0]}</p>
            <p>Location: {university["state-province"] || university.country}</p>
            <p>Country: {university.country}</p>
        </UniversityPreviewDiv>);
}
