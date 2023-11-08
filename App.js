import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ScrollView } from 'react-native';

const scrollData = [
  {
    id: 1,
    fullname: 'Aydin Gill',
    place: 'Khartoum, Sudan',
  },
  {
    id: 2,
    fullname: 'Jadyn Shepherd',
    place: 'Ashgabat, Turkmenistan',
  },
  {
    id: 3,
    fullname: 'Jayda Barton',
    place: 'Valletta, Malta',
  },
  {
    id: 4,
    fullname: 'Alfonso Armstrong',
    place: 'Kathmandu, Nepal',
  },
  {
    id: 5,
    fullname: 'Colt Pena',
    place: 'Houston, United States',
  },
  {
    id: 6,
    fullname: 'Cristopher Bean',
    place: 'Malé, Maldives',
  },
  {
    id: 7,
    fullname: 'Sarai Morgan',
    place: 'Ljubljana, Slovenia',
  },
  {
    id: 8,
    fullname: 'Gloria Duffy',
    place: 'Maputo, Mozambique',
  },
  {
    id: 9,
    fullname: 'Dario Gonzales',
    place: 'Kansas City, MO, United States',
  },
  {
    id: 10,
    fullname: 'Tatum Holden',
    place: 'Luxembourg, Luxembourg',
  },
  {
    id: 11,
    fullname: 'Ainsley Perkins',
    place: 'Columbus OH, United States',
  },
  {
    id: 12,
    fullname: 'Micah Carlson',
    place: 'Vatican City, Vatican City',
  },
  {
    id: 13,
    fullname: 'Katrina Mora',
    place: 'Lisbon, Portugal',
  },
  {
    id: 14,
    fullname: 'Gretchen Roberts',
    place: 'Valencia, Spain',
  },
  {
    id: 15,
    fullname: 'Lilah Wilkins',
    place: 'Portland, United States',
  },
  {
    id: 16,
    fullname: 'Hayley Delacruz',
    place: 'Reykjavík, Iceland',
  },
  {
    id: 17,
    fullname: 'Rudy Cameron',
    place: 'Monaco, Monaco',
  },
  {
    id: 18,
    fullname: 'Sonny Mccarty',
    place: 'Thun, Switzerland',
  },
  {
    id: 19,
    fullname: 'Jackson Gentry',
    place: 'Marseille, France',
  },
  {
    id: 20,
    fullname: 'Mateo Sutton',
    place: 'Rome, Italy',
  },
]


export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.dataTitle}>List of Guest</Text>
      <ScrollView style={styles.dataView}>
          {scrollData.map((item) => (
            <View key={item.id} style={styles.dataId}>
              <View style={styles.dataText}>
                <Text style={styles.fullname}>{item.fullname}</Text>
                <Text style={styles.place}>{item.place}</Text>
              </View>
            </View>
          ))}
        </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    marginLeft: 30,
    marginTop: 250,
  },
  dataTitle:{
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  dataView: {
    flex: 1,
  },
  dataId: {
    flexDirection: 'column',
  },
  fullname: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  place:{
    fontSize: 18,
    marginBottom: 5,
  }
});
