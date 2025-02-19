"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = UniversitiesContent;
const react_1 = require("react");
const UniversitiesPreview_1 = require("./UniversitiesPreview");
function UniversitiesContent() {
    const [numUniversities, setNumUniversities] = (0, react_1.useState)(5);
    const [universities, setUniversities] = (0, react_1.useState)([]);
    (0, react_1.useEffect)(() => {
        function getUniversities() {
            return __awaiter(this, void 0, void 0, function* () {
                const res = yield fetch(`http://universities.hipolabs.com/search?country=United+States&limit=${numUniversities}`);
                const data = yield res.json();
                setUniversities(data.slice(0, numUniversities));
            });
        }
        getUniversities();
    });
    return (<div>
            <input type="number" placeholder="Number of universities" value={numUniversities} onChange={(e) => setNumUniversities(Number(e.target.value))}/>
            <div>
                <p>numUniversities: {numUniversities}</p>
                {universities.map((university, index) => (<UniversitiesPreview_1.UniversityPreview key={index} university={university}/>))}
            </div>
        </div>);
}
