import { University } from "../interfaces/type.ts";
import styled from "styled-components";

const UniversityPreviewDiv = styled.div`
    margin: auto;
    padding: 1rem;
    width: 20rem;
    background-color: darkslategrey;
`;

export function UniversityPreview({ university }: { university: University }) {
    return (
        <UniversityPreviewDiv>
            <h3>{university.name}</h3>
            <p>Webpage: {university.web_pages[0]}</p>
            <p>Location: {university["state-province"] || university.country}</p>
            <p>Country: {university.country}</p>
        </UniversityPreviewDiv>
    );
}
