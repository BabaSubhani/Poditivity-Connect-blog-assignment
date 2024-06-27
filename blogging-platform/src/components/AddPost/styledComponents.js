import styled from 'styled-components';

export const AddPostContainer = styled.div`
  padding: 20px;
  max-width: 600px;
  margin: 0 auto;

  @media (max-width: 600px) {
    padding: 10px;
    max-width: 80%;
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  
`;

export const FormField = styled.div`
  
  margin:5px;
  @media (min-width: 600px) {
    margin: 15px;
  }
`;

export const Label = styled.label`
  margin-bottom: 5px;
  font-weight: bold;
  font-size: 1rem;

  @media (max-width: 600px) {
    font-size: 0.9rem;
  }
`;

export const Input = styled.input`
  padding: 10px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 4px;
  width: 100%;
  
  @media (max-width: 600px) {
    padding: 8px;
  }
`;

export const TextArea = styled.textarea`
  padding: 10px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 4px;
  resize: vertical;
  min-height: 150px;
  width: 100%;

  @media (max-width: 600px) {
    padding: 8px;
    min-height: 120px;
  }
`;

export const Button = styled.button`
  background-color: #007bff;
  color: white;
  padding: 12px 20px;
  border: none;
  cursor: pointer;
  border-radius: 4px;
  font-size: 16px;
  transition: background-color 0.3s ease;
  align-self: flex-center;
  margin:10px;
  margin-top:30px;

  &:hover {
    background-color: #0056b3;
  }

  @media (max-width: 600px) {
    padding: 10px 15px;
    font-size: 14px;
  }
`;

export const Message = styled.p`
  color: green;
  margin-top: 10px;
  font-weight: bold;
`;

export const Error = styled.p`
  color: red;
  margin-top: 10px;
  font-weight: bold;
`;

export const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
`;

export const FormControl = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 1rem;
`;

export const FormFieldGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;

  @media (max-width: 600px) {
    flex-direction: column;
  }
`;
