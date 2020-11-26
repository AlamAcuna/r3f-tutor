import { Box } from '@react-three/flex';
import { EXAMPLES_PADDING } from '../../constants';

export default function Example({ children, ...props }) {
  return (
    <Box centerAnchor padding={EXAMPLES_PADDING} {...props}>
      {children}
    </Box>
  );
}
