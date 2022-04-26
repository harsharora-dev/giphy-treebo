import PropTypes from "prop-types";
import { useInView } from 'react-intersection-observer';

function InfiniteScroll({ callback }) {
  const { ref } = useInView({
    threshold: 0,
    delay: 200,
    onChange: (inView) => {
      if (inView) {
        callback();
      }
    }
  });
  return <div ref={ref}>Loading More...</div>
}

InfiniteScroll.propTypes = {
  callback: PropTypes.func
}

InfiniteScroll.defaultProps = {
  callback: () => {},
}

export default InfiniteScroll;