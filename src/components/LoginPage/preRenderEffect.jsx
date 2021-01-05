import { useState, useEffect } from 'react';

const PreRenderEffect = (tasks) => {
  const [hasRendered, setHasRendered] = useState(false);

  useEffect(() => {
    setHasRendered(true)
  }, [hasRendered]);

  if (!hasRendered) {
    tasks();
  }
}

export default PreRenderEffect