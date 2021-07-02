type Props = {
  condition: Boolean | null;
  children: JSX.Element
}

export const Show = ({ condition, children }: Props) => {
  return condition ? children : null;
};
