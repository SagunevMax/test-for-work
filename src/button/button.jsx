const Button = ({buttonHandler}) => {
  const minData = 'http://www.filltext.com/?rows=32&id=%7Bnumber%7C1000%7D&firstName=%7BfirstName%7D&lastName=%7BlastName%7D&email=%7Bemail%7D&phone=%7Bphone%7C(xxx)xxx-xx-xx%7D&address=%7BaddressObject%7D&description=%7Blorem%7C32%7D'

  const fullData = 'http://www.filltext.com/?rows=1000&id=%7Bnumber%7C1000%7D&firstName=%7BfirstName%7D&delay=3&lastName=%7BlastName%7D&email=%7Bemail%7D&phone=%7Bphone%7C(xxx)xxx-xx-xx%7D&address=%7BaddressObject%7D&description=%7Blorem%7C32%7D'
  
    return (
    <div style={{display: 'flex', justifyContent: 'center'}}>
       <button style={{margin: '10px'}}
        type="button"
        class="btn btn-primary"
        onClick={() => (buttonHandler(minData))}
      >
        Min
      </button>
      <button style={{margin: '10px'}}
        type="button"
        class="btn btn-secondary"
        onClick={() => (buttonHandler(fullData))}
      >
        Max
      </button>
    </div>
      
    
  );
};

export default Button;
