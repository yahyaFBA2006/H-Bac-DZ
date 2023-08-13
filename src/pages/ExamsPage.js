import React from 'react';
import 'react-pdf'
const ExamsPage = () => {
  return (
    <div>
      <h1 className="text-3xl font-bold">امتحانات الرياضيات</h1>
      <ul>
        <li>
          <a href={process.env.PUBLIC_URL + 'https://drive.google.com/file/d/1WiLKkqbeKnSImb4OUzHlEqaVT5gIEYWt/view'}>امتحان 1</a> - <a href={process.env.PUBLIC_URL + 'https://drive.google.com/file/d/1WiLKkqbeKnSImb4OUzHlEqaVT5gIEYWt/view'}>حل امتحان 1</a>
        </li>
        <li>
          <a href={process.env.PUBLIC_URL + '../PDFS/eddirasa.com-bac-se-english-2022.pdf'}>امتحان 2</a> - <a href={process.env.PUBLIC_URL + '/solution2.pdf'}>حل امتحان 2</a>
        </li>
        {/* قم بإضافة المزيد من الروابط هنا */}
      </ul>
    </div>
  );
};

export default ExamsPage;
