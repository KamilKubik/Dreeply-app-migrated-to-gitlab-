// -------------- Labels update --------------

export const chartLabelsUpdate = async (
  data,
  index,
  currentSectionIndex,
  selectedSection
) => {
  // console.log(data);
  console.log(selectedSection.fields[currentSectionIndex].data[0].label2);

  const newArrayObj = [];

  if (data.label1) {
    console.log('Label 1 --> ', data.label1);
    const newObj = [
      data.label1,
      selectedSection.fields[currentSectionIndex].data[0].label2,
      selectedSection.fields[currentSectionIndex].data[0].label3,
      selectedSection.fields[currentSectionIndex].data[0].label4,
      selectedSection.fields[currentSectionIndex].data[0].label5,
      selectedSection.fields[currentSectionIndex].data[0].label6,
      selectedSection.fields[currentSectionIndex].data[0].label7,
      selectedSection.fields[currentSectionIndex].data[0].label8,
      selectedSection.fields[currentSectionIndex].data[0].label9,
      selectedSection.fields[currentSectionIndex].data[0].label10,
      selectedSection.fields[currentSectionIndex].data[0].label11,
      selectedSection.fields[currentSectionIndex].data[0].label12,
    ];
    newArrayObj.push(...newObj);
  } else if (data.label2) {
    console.log('Label 2 --> ', data.label2);
    const newObj = [
      selectedSection.fields[currentSectionIndex].data[0].label1,
      data.label2,
      selectedSection.fields[currentSectionIndex].data[0].label3,
      selectedSection.fields[currentSectionIndex].data[0].label4,
      selectedSection.fields[currentSectionIndex].data[0].label5,
      selectedSection.fields[currentSectionIndex].data[0].label6,
      selectedSection.fields[currentSectionIndex].data[0].label7,
      selectedSection.fields[currentSectionIndex].data[0].label8,
      selectedSection.fields[currentSectionIndex].data[0].label9,
      selectedSection.fields[currentSectionIndex].data[0].label10,
      selectedSection.fields[currentSectionIndex].data[0].label11,
      selectedSection.fields[currentSectionIndex].data[0].label12,
    ];
    newArrayObj.push(...newObj);
  } else if (data.label3) {
    console.log('Label 3 --> ', data.label3);
    const newObj = [
      selectedSection.fields[currentSectionIndex].data[0].label1,
      selectedSection.fields[currentSectionIndex].data[0].label2,
      data.label3,
      selectedSection.fields[currentSectionIndex].data[0].label4,
      selectedSection.fields[currentSectionIndex].data[0].label5,
      selectedSection.fields[currentSectionIndex].data[0].label6,
      selectedSection.fields[currentSectionIndex].data[0].label7,
      selectedSection.fields[currentSectionIndex].data[0].label8,
      selectedSection.fields[currentSectionIndex].data[0].label9,
      selectedSection.fields[currentSectionIndex].data[0].label10,
      selectedSection.fields[currentSectionIndex].data[0].label11,
      selectedSection.fields[currentSectionIndex].data[0].label12,
    ];
    newArrayObj.push(...newObj);
  } else if (data.label4) {
    const newObj = [
      selectedSection.fields[currentSectionIndex].data[0].label1,
      selectedSection.fields[currentSectionIndex].data[0].label2,
      selectedSection.fields[currentSectionIndex].data[0].label3,
      data.label4,
      selectedSection.fields[currentSectionIndex].data[0].label5,
      selectedSection.fields[currentSectionIndex].data[0].label6,
      selectedSection.fields[currentSectionIndex].data[0].label7,
      selectedSection.fields[currentSectionIndex].data[0].label8,
      selectedSection.fields[currentSectionIndex].data[0].label9,
      selectedSection.fields[currentSectionIndex].data[0].label10,
      selectedSection.fields[currentSectionIndex].data[0].label11,
      selectedSection.fields[currentSectionIndex].data[0].label12,
    ];
    newArrayObj.push(...newObj);
  } else if (data.label5) {
    const newObj = [
      selectedSection.fields[currentSectionIndex].data[0].label1,
      selectedSection.fields[currentSectionIndex].data[0].label2,
      selectedSection.fields[currentSectionIndex].data[0].label3,
      selectedSection.fields[currentSectionIndex].data[0].label4,
      data.label5,
      selectedSection.fields[currentSectionIndex].data[0].label6,
      selectedSection.fields[currentSectionIndex].data[0].label7,
      selectedSection.fields[currentSectionIndex].data[0].label8,
      selectedSection.fields[currentSectionIndex].data[0].label9,
      selectedSection.fields[currentSectionIndex].data[0].label10,
      selectedSection.fields[currentSectionIndex].data[0].label11,
      selectedSection.fields[currentSectionIndex].data[0].label12,
    ];
    newArrayObj.push(...newObj);
  } else if (data.label6) {
    const newObj = [
      selectedSection.fields[currentSectionIndex].data[0].label1,
      selectedSection.fields[currentSectionIndex].data[0].label2,
      selectedSection.fields[currentSectionIndex].data[0].label3,
      selectedSection.fields[currentSectionIndex].data[0].label4,
      selectedSection.fields[currentSectionIndex].data[0].label5,
      data.label6,
      selectedSection.fields[currentSectionIndex].data[0].label7,
      selectedSection.fields[currentSectionIndex].data[0].label8,
      selectedSection.fields[currentSectionIndex].data[0].label9,
      selectedSection.fields[currentSectionIndex].data[0].label10,
      selectedSection.fields[currentSectionIndex].data[0].label11,
      selectedSection.fields[currentSectionIndex].data[0].label12,
    ];
    newArrayObj.push(...newObj);
  } else if (data.label7) {
    const newObj = [
      selectedSection.fields[currentSectionIndex].data[0].label1,
      selectedSection.fields[currentSectionIndex].data[0].label2,
      selectedSection.fields[currentSectionIndex].data[0].label3,
      selectedSection.fields[currentSectionIndex].data[0].label4,
      selectedSection.fields[currentSectionIndex].data[0].label5,
      selectedSection.fields[currentSectionIndex].data[0].label6,
      data.label7,
      selectedSection.fields[currentSectionIndex].data[0].label8,
      selectedSection.fields[currentSectionIndex].data[0].label9,
      selectedSection.fields[currentSectionIndex].data[0].label10,
      selectedSection.fields[currentSectionIndex].data[0].label11,
      selectedSection.fields[currentSectionIndex].data[0].label12,
    ];
    newArrayObj.push(...newObj);
  } else if (data.label8) {
    const newObj = [
      selectedSection.fields[currentSectionIndex].data[0].label1,
      selectedSection.fields[currentSectionIndex].data[0].label2,
      selectedSection.fields[currentSectionIndex].data[0].label3,
      selectedSection.fields[currentSectionIndex].data[0].label4,
      selectedSection.fields[currentSectionIndex].data[0].label5,
      selectedSection.fields[currentSectionIndex].data[0].label6,
      selectedSection.fields[currentSectionIndex].data[0].label7,
      data.label8,
      selectedSection.fields[currentSectionIndex].data[0].label9,
      selectedSection.fields[currentSectionIndex].data[0].label10,
      selectedSection.fields[currentSectionIndex].data[0].label11,
      selectedSection.fields[currentSectionIndex].data[0].label12,
    ];
    newArrayObj.push(...newObj);
  } else if (data.label9) {
    const newObj = [
      selectedSection.fields[currentSectionIndex].data[0].label1,
      selectedSection.fields[currentSectionIndex].data[0].label2,
      selectedSection.fields[currentSectionIndex].data[0].label3,
      selectedSection.fields[currentSectionIndex].data[0].label4,
      selectedSection.fields[currentSectionIndex].data[0].label5,
      selectedSection.fields[currentSectionIndex].data[0].label6,
      selectedSection.fields[currentSectionIndex].data[0].label7,
      selectedSection.fields[currentSectionIndex].data[0].label8,
      data.label9,
      selectedSection.fields[currentSectionIndex].data[0].label10,
      selectedSection.fields[currentSectionIndex].data[0].label11,
      selectedSection.fields[currentSectionIndex].data[0].label12,
    ];
    newArrayObj.push(...newObj);
  } else if (data.label10) {
    const newObj = [
      selectedSection.fields[currentSectionIndex].data[0].label1,
      selectedSection.fields[currentSectionIndex].data[0].label2,
      selectedSection.fields[currentSectionIndex].data[0].label3,
      selectedSection.fields[currentSectionIndex].data[0].label4,
      selectedSection.fields[currentSectionIndex].data[0].label5,
      selectedSection.fields[currentSectionIndex].data[0].label6,
      selectedSection.fields[currentSectionIndex].data[0].label7,
      selectedSection.fields[currentSectionIndex].data[0].label8,
      selectedSection.fields[currentSectionIndex].data[0].label9,
      data.label10,
      selectedSection.fields[currentSectionIndex].data[0].label11,
      selectedSection.fields[currentSectionIndex].data[0].label12,
    ];
    newArrayObj.push(...newObj);
  } else if (data.label11) {
    const newObj = [
      selectedSection.fields[currentSectionIndex].data[0].label1,
      selectedSection.fields[currentSectionIndex].data[0].label2,
      selectedSection.fields[currentSectionIndex].data[0].label3,
      selectedSection.fields[currentSectionIndex].data[0].label4,
      selectedSection.fields[currentSectionIndex].data[0].label5,
      selectedSection.fields[currentSectionIndex].data[0].label6,
      selectedSection.fields[currentSectionIndex].data[0].label7,
      selectedSection.fields[currentSectionIndex].data[0].label8,
      selectedSection.fields[currentSectionIndex].data[0].label9,
      selectedSection.fields[currentSectionIndex].data[0].label10,
      data.label11,
      selectedSection.fields[currentSectionIndex].data[0].label12,
    ];
    newArrayObj.push(...newObj);
  } else if (data.label12) {
    const newObj = [
      selectedSection.fields[currentSectionIndex].data[0].label1,
      selectedSection.fields[currentSectionIndex].data[0].label2,
      selectedSection.fields[currentSectionIndex].data[0].label3,
      selectedSection.fields[currentSectionIndex].data[0].label4,
      selectedSection.fields[currentSectionIndex].data[0].label5,
      selectedSection.fields[currentSectionIndex].data[0].label6,
      selectedSection.fields[currentSectionIndex].data[0].label7,
      selectedSection.fields[currentSectionIndex].data[0].label8,
      selectedSection.fields[currentSectionIndex].data[0].label9,
      selectedSection.fields[currentSectionIndex].data[0].label10,
      selectedSection.fields[currentSectionIndex].data[0].label11,
      data.label12,
    ];
    newArrayObj.push(...newObj);
  }

  // Take current array copy
  let newFieldsArray = [...this.state.selectedSection.fields];
  newFieldsArray[currentSectionIndex] = {
    index,
    type: 'chart',
    labels: newArrayObj,
  };

  const newSection = {
    title: this.state.selectedSection.title,
    createdAt: this.state.selectedSection.createdAt,
    fields: newFieldsArray,
    id: this.state.selectedSection.id
  }

  // let newFieldsArray = [...this.state.selectedSection.fields];
  // newFieldsArray[currentSectionIndex] = {
  //   index,
  //   type: 'chart',
  //   labels: newObj
  // };
};
