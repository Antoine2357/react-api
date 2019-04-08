import  React  from  'react';

const  GenerateQuotes = ({ selectquote }) => {
    return (
        <div  className="GenerateQuotes">
        <button  onClick={selectquote}>quotes</button>
        </div>
    );
};

export  default  GenerateQuotes;