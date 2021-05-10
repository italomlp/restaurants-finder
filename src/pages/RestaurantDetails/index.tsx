import React from 'react';
import { Image, SafeAreaView, TouchableOpacity, View } from 'react-native';
import { RouteProp, useNavigation, useRoute } from '@react-navigation/native';

import BackIcon from '../../assets/icons/chevron_left_white.png';
import { Text } from '../../components/atoms';
import { useFetch } from '../../hooks/useFetch';
import Restaurant from '../../interfaces/Restaurant';
import { LoadingIndicator } from '../../components/molecules';

import {
  styles,
  CoverImage,
  ScrollContainer,
  HeaderContainer,
  LogoImage,
  CurvedContainer,
  Container,
  SectionTitle,
  Section,
  SectionDescription,
  Divider,
} from './styles';
import { RestaurantsShowResponse } from './controller';

type RestaurantDetailsRoute = { id: string };
type Routes = { RestaurantDetails: RestaurantDetailsRoute };

const RestaurantDetails: React.FC = () => {
  const { goBack } = useNavigation();
  const {
    params: { id },
  } = useRoute<RouteProp<Routes, 'RestaurantDetails'>>();
  const { data } = useFetch<Restaurant, unknown, RestaurantsShowResponse>(
    `/restaurants/${id}`,
  );

  if (!data) {
    return <LoadingIndicator fullPage />;
  }

  return (
    <ScrollContainer bounces={false} showsVerticalScrollIndicator={false}>
      <CoverImage source={{ uri: data.image }} />
      <SafeAreaView>
        <HeaderContainer>
          <TouchableOpacity onPress={goBack} hitSlop={styles.backHitSlop}>
            <Image source={BackIcon} />
          </TouchableOpacity>
          <LogoImage source={{ uri: data.logo }} />
          <View style={styles.headerRightPlaceholder}>
            <Image source={BackIcon} />
          </View>
        </HeaderContainer>
        <CurvedContainer />
        <Container>
          <Text type="h3" center style={styles.titleSpacing}>
            {data.name}
          </Text>

          <Section>
            <SectionTitle>Descrição</SectionTitle>
            <SectionDescription>{data.description}</SectionDescription>
          </Section>

          <Section>
            <SectionTitle>Contato</SectionTitle>
            <SectionDescription>{data.telephone}</SectionDescription>
            <SectionDescription>{data.website}</SectionDescription>
          </Section>

          <Section>
            <SectionTitle>Faixa de preço</SectionTitle>
            <SectionDescription>{data.priceRange}</SectionDescription>
          </Section>

          <Divider />

          <Section>
            <SectionTitle>Horários de Funcionamento</SectionTitle>
            <SectionDescription>{data.openingHours}</SectionDescription>
          </Section>

          <Section>
            <SectionTitle>Formas de pagamento</SectionTitle>
            <SectionDescription>{data.paymentMethods}</SectionDescription>
          </Section>
        </Container>
      </SafeAreaView>
    </ScrollContainer>
  );
};

export default RestaurantDetails;
