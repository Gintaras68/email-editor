

export const applyStyle = (formatType, selectedText) => {

  if(!selectedText) return

  let formattedText = selectedText;

  switch (formatType) {
    case "bold":
      formattedText = "<b>" + selectedText + "</b>";
      break;
    case "italic":
      formattedText = "<i>" + selectedText + "</i>";
      break;
    case "underline":
      formattedText = "<u>" + selectedText + "</u>";
      break;
    default:
      formattedText = selectedText;
  }

  console.log("Po" + formatType + " mygtuko.. " + formattedText);

  return formattedText;
};
