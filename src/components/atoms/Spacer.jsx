/**
 * A simple spacer component
 * @param {Object} props - The props for the component
 * @param {number} [props.size=1] - The size of the spacer (default 1)
 */
const Spacer = ({ size = 1 }) => (
  <div style={{ flexGrow: size }}></div>
);

export default Spacer;
