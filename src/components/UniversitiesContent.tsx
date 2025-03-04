import { useState, useEffect } from "react";
import { UniversityPreview } from "./UniversitiesPreview";
import { University } from "../interfaces/type.ts";
import React from "react";

export default function UniversitiesContent() {
    const [numUniversities, setNumUniversities] = useState(5);
    const [universities, setUniversities] = useState<University[]>([]);

    useEffect(() => {
        async function getUniversities() {
            const res = await fetch(`http://universities.hipolabs.com/search?country=United+States&limit=${numUniversities}`);
            const data = await res.json();
            setUniversities(data.slice(0, numUniversities));
        }
        getUniversities();
    });


    return (
        <div>
            <input
                type="number"
                placeholder="Number of universities"
                value={numUniversities}
                onChange={(e) => setNumUniversities(Number(e.target.value))}
            />
            <div>
                <p>numUniversities: {numUniversities}</p>
                {universities.map((university, index) => (
                    <UniversityPreview key={index} university={university} />
                ))}
            </div>
        </div>
    );
}
