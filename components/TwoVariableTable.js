import React, { useContext, useEffect } from 'react';
import { View, Text, StyleSheet, ScrollView, FlatList } from 'react-native';
import themeContext from '../Themes/themeContext';

const TwoVariableTable = ({ data }) => {
  const { theme } = useContext(themeContext);
  const [maxCellWidth, setMaxCellWidth] = React.useState(7);
  const [currentFontSize, setFontSize] = React.useState(15);

  useEffect(() => {
    for (const row of data.rows) {
      // console.log(`Row Label: ${row.label}`);
      if (row.label.length > maxCellWidth) {
        setMaxCellWidth(row.label.length);
      }
      for (let i = 0; i < data.columns.length; i++) {
        const column = data.columns[i];
        const value = row.values[i];
        if (column.length > maxCellWidth) {
          // console.log(column.length);
          setMaxCellWidth(column.length);
        }
        if (value.length > maxCellWidth) {
          setMaxCellWidth(value.length);
        }
        // console.log(`Column: ${column}, Value: ${value}`);
      }
    }
  }, [data]);

  const cellMinWidth = maxCellWidth * (currentFontSize - 2);

  // useEffect(() => {
  //   console.log(maxCellWidth); //Log the maximum length found for the data
  //   console.log(cellMinWidth); //Log the minimum length to display data
  // }, [maxCellWidth]);

  const renderHeader = () => (
    <View style={styles.headerRow}>
      <View
        style={[
          styles.headerCell,
          {
            backgroundColor: theme.twoVar_Table.headerCell,
            borderColor: theme.twoVar_Table.border,
            minWidth: cellMinWidth + 2,
          },
        ]}
      />

      {data.columns.map((column) => (
        // console.log(column), log the current column
        <View
          key={column}
          style={[
            styles.headerCell,
            {
              backgroundColor: theme.twoVar_Table.headerCell,
              borderColor: theme.twoVar_Table.border,
              minWidth: cellMinWidth,
              justifyContent: 'center',
            },
          ]}
        >
          <Text
            accessibilityLabel={`${column} Column`}
            accessibilityRole='header'
            style={[
              styles.headerText,
              {
                color: theme.twoVar_Table.headerText,
                fontSize: currentFontSize,
                minWidth: cellMinWidth,
                textAlign: 'center',
              },
            ]}
          >
            {column}
          </Text>
        </View>
      ))}
    </View>
  );

  const renderRow = ({ item: row }) => (
    // console.log(row.label), //Log the current row label
    <View
      style={[
        styles.row, {
          backgroundColor: theme.twoVar_Table.cell
        }]
      }
      key={row.label}
    >
      <View
        style={[
          styles.rowLabelCell,
          {
            backgroundColor: theme.twoVar_Table.headerCell,
            borderColor: theme.twoVar_Table.border,
            minWidth: cellMinWidth,
            justifyContent: 'center', // Center vertically
          },
        ]}
      >
        <Text
          accessibilityLabel={`${row.label} row`}
          accessibilityRole='header'
          style={[
            styles.rowLabelText,
            {
              color: theme.twoVar_Table.headerText,
              fontSize: currentFontSize,
              minWidth: cellMinWidth,
              textAlign: 'center', // Center horizontally
            },
          ]}
        >
          {row.label}
        </Text>
      </View>

      {row.values.map((value, valueIndex) => {
        const column = data.columns[valueIndex]; // Get the current column name
        // console.log(value, row.label, column); // Log the value, row label, and column name
        return (
          <View
            key={value+[valueIndex]}
            style={[
              styles.cell, {
                borderColor: theme.twoVar_Table.border,
                minWidth: cellMinWidth
              }
            ]}
          >
            <Text
              style={[
                styles.cellText,
                {
                  color: theme.twoVar_Table.cellText,
                  fontSize: currentFontSize,
                  minWidth: cellMinWidth,
                  textAlign: 'center', // Center horizontally
                },
              ]}
              accessibilityLabel={`${value} of: Row ${row.label}, Column ${column}`}
            >
              {value}
            </Text>
          </View>
        );
      })}
    </View>
  );




  return (
    <ScrollView horizontal={true}>
      <FlatList
        accessibilityRole="grid"
        data={data.rows}
        keyExtractor={(item) => item.label}
        ListHeaderComponent={renderHeader}
        renderItem={renderRow}
      />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
  },
  headerRow: {
    flexDirection: 'row',
  },
  headerCell: {
    borderWidth: 1,
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1, // Equal flex to center content
  },
  row: {
    flexDirection: 'row',
  },
  rowLabelCell: {
    borderWidth: 1,
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1, // Equal flex to center content
  },
  cell: {
    borderWidth: 1,
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1, // Equal flex to center content
  },
  cellText: {
    // Center text within the cell
    textAlign: 'center',
  },
  headerText: {},
  rowLabelText: {},
});

export default TwoVariableTable;
