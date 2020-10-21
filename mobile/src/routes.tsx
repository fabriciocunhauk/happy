import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import OrphanagesMap from './pages/OrphanagesMap';
import OrphanageDetails from './pages/OrphanageDetails';
import SelectMapPosition from './pages/CreateOephanage/SelectMapPosition';
import OrphanageData from './pages/CreateOephanage/OrphanageData';
import Header from './components/Header';

const { Navigator, Screen } = createStackNavigator();

export default function Routes() {
    return (
        <NavigationContainer>
            <Navigator screenOptions={{ headerShown: false, cardStyle: { backgroundColor: '#f2f3f5' } }}>
                <Screen name="OrphanageMap" component={OrphanagesMap} />

                <Screen
                    name="OrphanageDetails"
                    options={{
                        headerShown: true,
                        header: () => <Header showCancel={false} title='Orfanato' />
                    }}
                    component={OrphanageDetails}
                />

                <Screen
                    name="SelectMapPosition"
                    component={SelectMapPosition}
                    options={{
                        headerShown: true,
                        header: () => <Header title='Selecione no mapa' />
                    }}
                />

                <Screen
                    name="OrphanageData"
                    component={OrphanageData}
                    options={{
                        headerShown: true,
                        header: () => <Header title='Informe os dados' />
                    }}
                />
            </Navigator>
        </NavigationContainer>
    )
}