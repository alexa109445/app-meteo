import { Button } from 'react-bootstrap';

const BottoneCitta = ({ nome, onClick }) => {
  return (
    <Button variant="info" onClick={() => onClick(nome)}>
      {nome}
    </Button>
  );
};

export default BottoneCitta;
