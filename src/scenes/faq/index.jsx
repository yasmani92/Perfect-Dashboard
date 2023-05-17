import { ExpandMore } from "@mui/icons-material";
import { Accordion, AccordionDetails, AccordionSummary, Box, Typography, useTheme } from "@mui/material";
import Header from "../../components/Header";
import { tokens } from "../../theme";

const FAQ = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode)
  return <Box m="20px">
    <Header 
      title="FAQ"
      subtitle="Frequently Asked Questions Page"
    />

    <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMore />}>
            <Typography 
              color={colors.greenAccent[500]}
              variant="h5"
            >
                An Important Question
            </Typography>
        </AccordionSummary>
        <AccordionDetails>
            <Typography>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis omnis culpa hic labore,
                enim eaque impedit quod magni aperiam velit, et architecto explicabo aspernatur in? Asperiores 
                non harum accusantium. Delectus.
            </Typography>
        </AccordionDetails>
    </Accordion>

    <Accordion defaultExpanded mt="20px">
        <AccordionSummary expandIcon={<ExpandMore />}>
            <Typography 
              color={colors.greenAccent[500]}
              variant="h5"
            >
                Another Important Question
            </Typography>
        </AccordionSummary>
        <AccordionDetails>
            <Typography>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis omnis culpa hic labore,
                enim eaque impedit quod magni aperiam velit, et architecto explicabo aspernatur in? Asperiores 
                non harum accusantium. Delectus.
            </Typography>
        </AccordionDetails>
    </Accordion>

    <Accordion defaultExpanded mt="20px">
        <AccordionSummary expandIcon={<ExpandMore />}>
            <Typography 
              color={colors.greenAccent[500]}
              variant="h5"
            >
                Your Favorite Question
            </Typography>
        </AccordionSummary>
        <AccordionDetails>
            <Typography>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis omnis culpa hic labore,
                enim eaque impedit quod magni aperiam velit, et architecto explicabo aspernatur in? Asperiores 
                non harum accusantium. Delectus.
            </Typography>
        </AccordionDetails>
    </Accordion>

    <Accordion defaultExpanded mt="20px">
        <AccordionSummary expandIcon={<ExpandMore />}>
            <Typography 
              color={colors.greenAccent[500]}
              variant="h5"
            >
                Some Random Question
            </Typography>
        </AccordionSummary>
        <AccordionDetails>
            <Typography>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis omnis culpa hic labore,
                enim eaque impedit quod magni aperiam velit, et architecto explicabo aspernatur in? Asperiores 
                non harum accusantium. Delectus.
            </Typography>
        </AccordionDetails>
    </Accordion>

    <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMore />}>
            <Typography 
              color={colors.greenAccent[500]}
              variant="h5"
            >
                The Final Question
            </Typography>
        </AccordionSummary>
        <AccordionDetails>
            <Typography>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis omnis culpa hic labore,
                enim eaque impedit quod magni aperiam velit, et architecto explicabo aspernatur in? Asperiores 
                non harum accusantium. Delectus.
            </Typography>
        </AccordionDetails>
    </Accordion>

  </Box>
}

export default FAQ;