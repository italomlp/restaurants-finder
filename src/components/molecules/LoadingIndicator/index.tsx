import React from 'react';

import { Loader, Row, Text } from '../../atoms';

import { styles } from './styles';

type LoadingIndicatorProps = {
  marginTop?: boolean;
  fullPage?: boolean;
};

const LoadingIndicator: React.FC<LoadingIndicatorProps> = ({
  marginTop,
  fullPage,
}) => (
  <Row
    style={[
      styles.loadingContainer,
      marginTop && styles.loadingContainerMarginTop,
      fullPage && styles.loadingContainerFullPage,
    ]}
  >
    <Text style={styles.loadingText}>Carregando</Text>
    <Loader />
  </Row>
);

export default LoadingIndicator;
