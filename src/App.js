
import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import SceintificPage from './pages/SceintificPage';
import MathTecniquePage from './pages/MathTecniquePage';
import MathTelamPage from './pages/MathTelamPage';
import GesionPage from './pages/GesionPage';
import LanguegesPage from './pages/LanguegesPage';
import PhiloPage from './pages/PhiloPage';
import React from 'react';
import ChooseMathMtPage from './pages/ChooseMathMtPage';
import ChooseMathSCPage from './pages/ChooseMathSCPage';
import ChooseMathMMPage from './pages/ChooseMathMMPage';
import ChoosePhysicMTPage from './pages/ChoosePhysicMTPage';
import ChoosePhysicSCPage from './pages/ChoosePhysicSCPage';
import ChooseFrenchMTPage from './pages/ChooseFrenchMTPage';
import ChooseGeoPage from './pages/ChooseGeoPage';
import ChooseEnglishPage from './pages/ChooseEnglishPage';
import ChooseArabicPage from './pages/ChooseArabicPage';
import ChooseIslamicPage from './pages/ChooseIslamicPage';
import ChoosePhiloPage from './pages/ChoosePhiloPage';
import ChoosePhiloMMPage from './pages/ChoosePhiloMMPage';
import ChooseMecanicPage from './pages/ChooseMecanicPage';
import ChooseIlecPage from './pages/ChooseIlecPage';
import ChooseCivilPage from './pages/ChooseCivilPage';
import ChooseGpPage from './pages/ChooseGpPage';
import MathBookPage from './pages/MathBookPage';
import MathBacExameMT from './pages/MathBacExameMT';
import MathBacExameMM from './pages/MathBacExameMM';
import MathBacExameSC from './pages/MathBacExameSC';
import MathLessonMT from './pages/MathLessonMT';
import MathTestMt from './pages/MathTestMt';
import PhysicBookPage from './pages/PhysicBookPage';
import PhysicBacExameMT from './pages/PhysicBacExameMT';
import PhysicBacExameSC from './pages/PhysicBacExameSC';
import PhysicLessonMT from './pages/PhysicLessonMT';
import PhysicTestMt from './pages/PhysicTestMt';
import FrenchBookPage from './pages/FrenchBookPage';
import FrenchBacExameMt from './pages/FrenchBacExameMt';
import FrenchLessonMt from './pages/FrenchLessonMt';
import FrenchTestMt from './pages/FrenchTestMt';
import PhiloBookPage from './pages/PhiloBookPage';
import PhiloBacExameMt from './pages/PhiloBacExameMt';
import PhiloBacExameMM from './pages/PhiloBacExameMM';
import PhiloLessonMt from './pages/PhiloLessonMt';
import PhiloTestMt from './pages/PhiloTestMt';
import EnglishBookPage from './pages/EnglishBookPage';
import EnglishBacExameMt from './pages/EnglishBacExameMt';
import EnglishLessonMt from './pages/EnglishLessonMt';
import EnglishTestMt from './pages/EnglishTestMt';
import GeoBookPage from './pages/GeoBookPage';
import GeoBacExameMt from './pages/GeoBacExameMt';
import GeoLessonMt from './pages/GeoLessonMt';
import GeoTestMt from './pages/GeoTestMt';
import ArabicBookPage from './pages/ArabicBookPage';
import ArabicBacExameMt from './pages/ArabicBacExameMt';
import ArabicLessonMt from './pages/ArabicLessonMt';
import ArabicTestMt from './pages/ArabicTestMt';
import IslamicBookPage from './pages/IslamicBookPage';
import IslamicBacExameMt from './pages/IslamicBacExameMt';
import IslamicLessonMt from './pages/IslamicLessonMt';
import IslamicTestMt from './pages/IslamicTestMt';
import MecanicBookPage from './pages/MecanicBookPage';
import MecanicBacExame from './pages/MecanicBacExame';
import MecanicLesson from './pages/MecanicLesson';
import MecanicTest from './pages/MecanicTest';
import IlecBookPage from './pages/IlecBookPage';
import IlecBacExame from './pages/IlecBacExame';
import IlecLesson from './pages/IlecLesson';
import IlecTest from './pages/IlecTest';
import CivilBookPage from './pages/CivilBookPage';
import CivilBacExame from './pages/CivilBacExame';
import CivilLesson from './pages/CivilLesson';
import CivilTest from './pages/CivilTest';
import GpBookPage from './pages/GpBookPage';
import GplBacExame from './pages/GplBacExame';
import GpLesson from './pages/GpLesson';
import GpTest from './pages/GpTest';
import Geo2 from './pages/Geo2';
import Historical from './pages/Historycal';
import ScSc from './pages/ScSc';
import ChooseSCPage from './pages/ChooseSCPage';
import SCSCBacEame from './pages/SCSCBacEame';
import SCSCBook from './pages/SCSCBook';
import SCSCLesson from './pages/SCSCLesson';
import SCSCTest from './pages/SCSCTest';
import ChooseSCMMPage from './pages/ChooseSCMMPage';
import SCMM from './pages/SCMM';
import LawBacExame from './pages/LawBacExame';
import MathGSBacExame from './pages/MathGSBacExame';
import ManagmentBacExame from './pages/ManagmentBacExame';
import GeoGSBacExame from './pages/GeoGSBacExame';
import ArabicPHBacExame from './pages/ArabicPHBacExame';
import GesionBacExame from './pages/GesionBacExame';
import Advises from './pages/Advises';
import ToDoListe from './pages/ToDoListe';

import MathPHBacExame from './pages/MathPHBacExame';
import EnglishPHPage from './pages/EnglishPHPage';
import GeoPHBacExame from './pages/GeoPHBacExame';
import BacExameFrenchPH from './pages/BacExameFrenchPH';

import PhiloPHBacExame from './pages/PhiloPHBacExame';




import  GeoLGBacExame from './pages/GeoLGBacExame';
import SpanichBacExame from './pages/SpanichBacExame';
import Italian from './pages/Italian';
import ArabicLGBacExame from './pages/ArabicLGBacExame';
import AlmandBacExame from './pages/AlmandBacExame';
import PhiloBacExameLG from './pages/PhiloBacExameLG';
import EnglishBacExameLG from './pages/EnglishBacExameLG';
import FrenchBacExameLG from './pages/FrenchBacExameLG';



function App() {

  return(
    <div>
      <Router>
        <Navbar />
        <Routes>
        <Route  path='/' exact Component={Home}/>

 
 <Route path="/GeoLGBacExame" element={< GeoLGBacExame />} />
 <Route path="/SpanichBacExame" element={<SpanichBacExame />} />
 <Route path="/Italian" element={<Italian />} />
 <Route path="/ArabicLGBacExame" element={< ArabicLGBacExame/>} />
 <Route path="/AlmandBacExame" element={< AlmandBacExame/>} />
 <Route path="/PhiloBacExameLG" element={< PhiloBacExameLG/>} />
 <Route path="/EnglishBacExameLG" element={<EnglishBacExameLG />} />
 <Route path="/FrenchBacExameLG" element={<FrenchBacExameLG />} />

        <Route path="/MathPHBacExame" element={< MathPHBacExame/>} />
        <Route path="/EnglishPHPage" element={< EnglishPHPage/>} />
        <Route path="/GeoPHBacExame" element={< GeoPHBacExame/>} />
        <Route path="/BacExameFrenchPH" element={<BacExameFrenchPH/>} />
        <Route path="/PhiloPHBacExame" element={< PhiloPHBacExame/>} />

        <Route path="/ChooseSCPage" element={<ChooseSCPage />} />
        <Route path="/SCSCBacEame" element={<SCSCBacEame />} />
        <Route path="/SCSCBook" element={<SCSCBook />} />
        <Route path="/SCSCLesson" element={<SCSCLesson />} />
        <Route path="/SCSCTest" element={<SCSCTest />} />

        <Route path="/sceintificPage" element={<SceintificPage />} />
        <Route path="/MathTecniquePage" element={<MathTecniquePage />} />
        <Route path="/MathTelamPage" element={<MathTelamPage />} />
        <Route path="/GesionPage" element={<GesionPage />} />
        <Route path="/LanguegesPage" element={<LanguegesPage/>} />
        <Route path="/PhiloPage" element={<PhiloPage/>} />
        <Route path="/ChooseMathMtPage" element={<ChooseMathMtPage/>} />
        <Route path="/ChooseMathMMPage" element={<ChooseMathMMPage/>} />
        <Route path="/ChooseMathSCPage" element={<ChooseMathSCPage/>} />
        <Route path="/ChoosePhysicMtPage" element={<ChoosePhysicMTPage/>} />
        <Route path="/ChoosePhysicSCPage" element={<ChoosePhysicSCPage/>} />
        <Route path="/ChooseFrenchMTPage" element={<ChooseFrenchMTPage/>} />
        <Route path="/ChooseEnglishPage" element={<ChooseEnglishPage/>} />
        <Route path="/ChooseGeoPage" element={<ChooseGeoPage/>} />
        <Route path="/ChooseIslamicPage" element={<ChooseIslamicPage/>} />
        <Route path="/ChooseArabicPage" element={<ChooseArabicPage/>} />
        <Route path="/ChooseMecanicPage" element={<ChooseMecanicPage/>} />
        <Route path="/ChooseIlecPage" element={<ChooseIlecPage/>} />
        <Route path="/ChooseCivilPage" element={<ChooseCivilPage/>} />
        <Route path="/ChooseGpPage" element={<ChooseGpPage/>} />
        <Route path="/ChoosePhiloPage" element={<ChoosePhiloPage/>} />
        <Route path="/ChoosePhiloMMPage" element={<ChoosePhiloMMPage/>} />
        <Route path="/MathBookPage" element={<MathBookPage/>} />
        <Route path="/MathBacExameMT" element={<MathBacExameMT/>} />
        <Route path="/MathBacExameSC" element={<MathBacExameSC/>} />
        <Route path="/MathBacExameMM" element={<MathBacExameMM/>} />
        <Route path="/MathLessonMT" element={<MathLessonMT/>} />
        <Route path="/MathTestMt" element={<MathTestMt/>} />
        <Route path="/PhysicBookPage" element={<PhysicBookPage/>} />
        <Route path="/PhysicBacExameMT" element={<PhysicBacExameMT/>} />
        <Route path="/PhysicBacExameSC" element={<PhysicBacExameSC/>} />
        <Route path="/PhysicLessonMT" element={<PhysicLessonMT/>} />
        <Route path="/PhysicTestMt" element={<PhysicTestMt/>} />
        <Route path="/FrenchBookPage" element={<FrenchBookPage/>} />
        <Route path="/FrenchBacExameMt" element={<FrenchBacExameMt/>} />
        <Route path="/FrenchLessonMt" element={<FrenchLessonMt/>} />
        <Route path="/FrenchTestMt" element={<FrenchTestMt/>} />
        <Route path="/PhiloBookPage" element={<PhiloBookPage/>} />
        <Route path="/PhiloBacExameMt" element={<PhiloBacExameMt/>} />
        <Route path="/PhiloBacExameMM" element={<PhiloBacExameMM/>} />
        <Route path="/PhiloLessonMt" element={<PhiloLessonMt/>} />
        <Route path="/PhiloTestMt" element={<PhiloTestMt/>} />
        <Route path="/EnglishBookPage" element={<EnglishBookPage/>} />
        <Route path="/EnglishBacExameMt" element={<EnglishBacExameMt/>} />
        <Route path="/EnglishLessonMt" element={<EnglishLessonMt/>} />
        <Route path="/EnglishTestMt" element={<EnglishTestMt/>} />
        <Route path="/GeoBookPage" element={<GeoBookPage/>} />
        <Route path="/GeoBacExameMt" element={<GeoBacExameMt/>} />
        <Route path="/GeoLessonMt" element={<GeoLessonMt/>} />
        <Route path="/GeoTestMt" element={<GeoTestMt/>} />
        <Route path="/IslamicBookPage" element={<IslamicBookPage/>} />
        <Route path="/IslamicBacExameMt" element={<IslamicBacExameMt/>} />
        <Route path="/IslamicLessonMt" element={<IslamicLessonMt/>} />
        <Route path="/IslamicTestMt" element={<IslamicTestMt/>} />
        <Route path="/ArabicBookPage" element={<ArabicBookPage/>} />
        <Route path="/ArabicBacExameMt" element={<ArabicBacExameMt/>} />
        <Route path="/ArabicLessonMt" element={<ArabicLessonMt/>} />
        <Route path="/ArabicTestMt" element={<ArabicTestMt/>} />
        <Route path="/MecanicBookPage" element={<MecanicBookPage/>} />
        <Route path="/MecanicBacExame" element={<MecanicBacExame/>} />
        <Route path="/MecanicLesson" element={<MecanicLesson/>} />
        <Route path="/MecanicTest" element={<MecanicTest/>} />
        <Route path="/IlecBookPage" element={<IlecBookPage/>} />
        <Route path="/IlecBacExame" element={<IlecBacExame/>} />
        <Route path="/IlecLesson" element={<IlecLesson/>} />
        <Route path="/IlecTest" element={<IlecTest/>} />
        <Route path="/CivilBookPage" element={<CivilBookPage/>} />
        <Route path="/CivilBacExame" element={<CivilBacExame/>} />
        <Route path="/CivilLesson" element={<CivilLesson/>} />
        <Route path="/CivilTest" element={<CivilTest/>} />
        <Route path="/GpBookPage" element={<GpBookPage/>} />
        <Route path="/GplBacExame" element={<GplBacExame/>} />
        <Route path="/GpLesson" element={<GpLesson/>} />
        <Route path="/GpTest" element={<GpTest/>} />
        <Route path="/Geo2" element={<Geo2/>} />
        <Route path="/Historical" element={<Historical/>} />
        <Route path="/ChooseSCMMPage" element={<ChooseSCMMPage/>} />
        <Route path="/ScSc" element={<ScSc/>} />
        <Route path="/SCMM" element={<SCMM/>} />

        <Route path="/GeoGSBacExame" element={< GeoGSBacExame/>} />
        <Route path="/Advises" element={< Advises/>} />
        <Route path="/ManagmentBacExame" element={<ManagmentBacExame/>} />
        <Route path="/MathGSBacExame" element={<MathGSBacExame/>} />
        <Route path="/LawBacExame" element={<LawBacExame/>} />

        <Route path="/GesionBacExame" element={<GesionBacExame/>} />
        <Route path="/ToDoListe" element={<ToDoListe/>} />
        <Route path="/ArabicPHBacExame" element={<ArabicPHBacExame/>} />
        </Routes>
        <Footer/>
      </Router>
<div>
</div>
    </div>
  ) 
}
export default App;
