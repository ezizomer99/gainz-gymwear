
import {
    GroupContainer,
    FormInputLabel,
    InputContainer,
} from "./form-input.styles"


const FormInput = ({label, ...otherProps}) => {
    return(
        <GroupContainer>
        <InputContainer {...otherProps} />
        {label && (
        <FormInputLabel 
            shrink={otherProps.value.length}>
            {label}
        </FormInputLabel>
        )}
        </GroupContainer>
    );
};

export default FormInput;