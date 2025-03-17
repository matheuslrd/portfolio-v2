import { ReactNode } from 'react';
import { ButtonContainer } from './styles';

type Props = {
  children: ReactNode;
  href: string;
  target?: string;
  rel?: string;
};

function ContactButton(props: Props) {
  const { children, href, target, rel } = props;

  return (
    <ButtonContainer href={href} target={target} rel={rel}>
      {children}
    </ButtonContainer>
  );
}

export default ContactButton;
