import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  Button,
  HStack,
  Heading,
  Select,
  VStack,
} from "@chakra-ui/react";
import { BiArrowBack } from "react-icons/bi";
import { FormInput } from "./formInput";
import { useState } from "react";
import CountUp from "react-countup";
export const Taxcalculate = ({ settabs }) => {
  const [ageCategory, setAgeCategory] = useState("below60");
  const [salary, setSalary] = useState(0);
  const [otherIncome, setotherIncome] = useState(0);
  const [annualInterestIncome, setannualInterestIncome] = useState(0);
  const [rentalIncome, setRentalIncome] = useState(0);
  const [selfOccupiedInterest, setSelfOccupiedInterest] = useState(0);
  const [letOutInterest, setLetOutInterest] = useState(0);
  const [deduction80C, setDeduction80C] = useState(0);
  const [interestSavingsAccount, setinterestSavingsAccount] = useState(0);
  // const [hraExemption, setHraExemption] = useState(0);
  const [npsContribution, setNpsContribution] = useState(0);
  const [medicalInsurancePremium, setMedicalInsurancePremium] = useState(0);
  const [donation80G, setDonation80G] = useState(0);
  const [interest80E, setInterest80E] = useState(0);
  const [newTaxLiablity, setnewTaxLiablity] = useState(0);
  const [oldTaxLiablity, setoldTaxLiablity] = useState(0);

  const calculateNewRegimeTax = (salary) => {
    // New Regime tax calculation logic based on age category
    // Adjust the tax slabs and rates accordingly
    let taxLiability = 0;
    if (ageCategory === "below60") {
      // Apply tax slabs for below 60 years in new regime
      if (salary <= 300000) {
        taxLiability = 0;
      } else if (salary > 300000 && salary <= 600000) {
        taxLiability = (salary - 300000) * 0.05;
        taxLiability += taxLiability * 0.04;
      } else if (salary > 600000 && salary <= 900000) {
        taxLiability = (salary - 600000) * 0.1 + 300000 * 0.05;
        taxLiability += taxLiability * 0.04;
      } else if (salary > 900000 && salary <= 1200000) {
        taxLiability = (salary - 900000) * 0.15 + 300000 * 0.1 + 300000 * 0.05;
        taxLiability += taxLiability * 0.04;
      } else if (salary > 1200000 && salary <= 1500000) {
        taxLiability =
          (salary - 1200000) * 0.2 +
          300000 * 0.15 +
          300000 * 0.1 +
          300000 * 0.05;
        taxLiability += taxLiability * 0.04;
      } else {
        taxLiability =
          (salary - 1500000) * 0.3 +
          300000 * 0.2 +
          300000 * 0.15 +
          300000 * 0.1 +
          300000 * 0.05;
        taxLiability += taxLiability * 0.04;
      }
    } else if (ageCategory === "60to80") {
      // Apply tax slabs for 60 to 80 years in new regime
      // Adjust the tax slabs and rates accordingly
      if (salary <= 250000) {
        taxLiability = 0;
      } else if (salary > 250000 && salary <= 500000) {
        taxLiability = (salary - 250000) * 0.05;
        taxLiability += taxLiability * 0.04;
      } else if (salary > 500000 && salary <= 750000) {
        taxLiability = (salary - 500000) * 0.1 + 250000 * 0.05;
        taxLiability += taxLiability * 0.04;
      } else if (salary > 750000 && salary <= 1000000) {
        taxLiability = (salary - 750000) * 0.15 + 250000 * 0.1 + 250000 * 0.05;
        taxLiability += taxLiability * 0.04;
      } else if (salary > 1000000 && salary <= 1250000) {
        taxLiability =
          (salary - 1000000) * 0.2 +
          250000 * 0.15 +
          250000 * 0.1 +
          250000 * 0.05;
        taxLiability += taxLiability * 0.04;
      } else if (salary > 1250000 && salary <= 1500000) {
        taxLiability =
          (salary - 1250000) * 0.25 +
          250000 * 0.2 +
          250000 * 0.15 +
          250000 * 0.1 +
          250000 * 0.05;
        taxLiability += taxLiability * 0.04;
      } else {
        taxLiability =
          (salary - 1500000) * 0.3 +
          250000 * 0.25 +
          250000 * 0.2 +
          250000 * 0.15 +
          250000 * 0.1 +
          250000 * 0.05;
        taxLiability += taxLiability * 0.04;
      }
    } else if (ageCategory === "above80") {
      // Apply tax slabs for above 80 years in new regime
      // Adjust the tax slabs and rates accordingly
      if (salary <= 250000) {
        taxLiability = 0;
      } else if (salary > 250000 && salary <= 500000) {
        taxLiability = (salary - 250000) * 0.05;
        taxLiability += taxLiability * 0.04;
      } else if (salary > 500000 && salary <= 750000) {
        taxLiability = (salary - 500000) * 0.1 + 250000 * 0.05;
        taxLiability += taxLiability * 0.04;
      } else if (salary > 750000 && salary <= 1000000) {
        taxLiability = (salary - 750000) * 0.15 + 250000 * 0.1 + 250000 * 0.05;
        taxLiability += taxLiability * 0.04;
      } else if (salary > 1000000 && salary <= 1250000) {
        taxLiability =
          (salary - 1000000) * 0.2 +
          250000 * 0.15 +
          250000 * 0.1 +
          250000 * 0.05;
        taxLiability += taxLiability * 0.04;
      } else if (salary > 1250000 && salary <= 1500000) {
        taxLiability =
          (salary - 1250000) * 0.25 +
          250000 * 0.2 +
          250000 * 0.15 +
          250000 * 0.1 +
          250000 * 0.05;
        taxLiability += taxLiability * 0.04;
      } else {
        taxLiability =
          (salary - 1500000) * 0.3 +
          250000 * 0.25 +
          250000 * 0.2 +
          250000 * 0.15 +
          250000 * 0.1 +
          250000 * 0.05;
        taxLiability += taxLiability * 0.04;
      }
    }

    setnewTaxLiablity(taxLiability);
  };

  const calculateOldRegimeTax = (taxableIncome) => {
    // Old Regime tax calculation logic based on age category
    // Adjust the tax slabs and rates accordingly
    let taxLiability = 0;
    if (ageCategory === "below60") {
      if (taxableIncome <= 250000) {
        taxLiability = 0;
      } else if (taxableIncome <= 500000) {
        taxLiability = (taxableIncome - 250000) * 0.05;
        taxLiability += taxLiability * 0.04;
      } else if (taxableIncome <= 1000000) {
        taxLiability = 250000 * 0.05 + (taxableIncome - 500000) * 0.2;
        taxLiability += taxLiability * 0.04;
      } else {
        taxLiability =
          250000 * 0.05 + 500000 * 0.2 + (taxableIncome - 1000000) * 0.3;
        taxLiability += taxLiability * 0.04;
      }
      // Apply tax slabs for below 60 years in old regime
      // Adjust the tax slabs and rates accordingly
    } else if (ageCategory === "60to80") {
      if (taxableIncome <= 300000) {
        taxLiability = 0;
      } else if (taxableIncome <= 500000) {
        taxLiability = (taxableIncome - 300000) * 0.05;
        taxLiability += taxLiability * 0.04;
      } else if (taxableIncome < 1000000) {
        taxLiability = 300000 * 0.05 + (taxableIncome - 500000) * 0.2;
        taxLiability += taxLiability * 0.04;
      } else {
        taxLiability =
          300000 * 0.05 + 500000 * 0.2 + (taxableIncome - 1000000) * 0.3;
        taxLiability += taxLiability * 0.04;
      }
      // Apply tax slabs for 60 to 80 years in old regime
      // Adjust the tax slabs and rates accordingly
    } else if (ageCategory === "above80") {
      // Apply tax slabs for above 80 years in old regime
      // Adjust the tax slabs and rates accordingly
      if (taxableIncome <= 500000) {
        taxLiability = 0;
      } else if (taxableIncome <= 1000000) {
        taxLiability = (taxableIncome - 500000) * 0.2;
        taxLiability += taxLiability * 0.04;
      } else {
        taxLiability = 500000 * 0.2 + (taxableIncome - 1000000) * 0.3;
        taxLiability += taxLiability * 0.04;
      }
    }
    setoldTaxLiablity(taxLiability);
  };

  const calculateTax = () => {
    const grossTotalIncome =
      salary + rentalIncome + otherIncome + annualInterestIncome;
    const totalIncome = grossTotalIncome - 50000;
    selfOccupiedInterest -
      letOutInterest -
      deduction80C -
      npsContribution -
      medicalInsurancePremium -
      donation80G -
      interest80E -
      interestSavingsAccount;
    const taxableIncome = totalIncome;
    console.log(taxableIncome);
    calculateNewRegimeTax(taxableIncome);
    calculateOldRegimeTax(taxableIncome);
  };
  // console.log(newTaxLiablity);
  // console.log(oldTaxLiablity);
  return (
    <Box
      display={"flex"}
      width={"100%"}
      gap={10}
      flexDir={"column"}
      justifyContent={"space-around"}
    >
      <BiArrowBack
        cursor={"pointer"}
        fontSize={"30px"}
        onClick={() => settabs("")}
      />
      <Heading>Advance tax Calculator</Heading>
      <Accordion defaultIndex={[0]} allowMultiple>
        <AccordionItem>
          <Select
            placeholder="Select Year"
            fontSize={"2xl"}
            border={"none"}
            pb={2}
            pt={2}
          >
            <option value="2021-2022">2021-2022</option>
            <option value="2022-2023">2022-2023</option>
            <option value="2023-2024">2023-2024</option>
            <option value="2024-2025">2024-2025</option>
          </Select>
        </AccordionItem>
        <AccordionItem>
          <Select
            placeholder="Age Category"
            fontSize={"2xl"}
            onChange={(e) => setAgeCategory(e.target.value)}
            border={"none"}
            pb={2}
            pt={2}
          >
            <option value="below60">Below 60</option>
            <option value="60to80">60 or above 60</option>
            <option value="above80">80 or below 80</option>
          </Select>
        </AccordionItem>
        <AccordionItem>
          <h2>
            <AccordionButton>
              <Box as="span" flex="1" textAlign="left" fontSize={"2xl"}>
                Income
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4} display={"flex"} flexDir={"column"} gap={5}>
            <FormInput
              fontSize={"sm"}
              label={"Income from Salary"}
              value={salary}
              handleInputChange={setSalary}
            />
            <FormInput
              fontSize={"sm"}
              value={otherIncome}
              label={"Annual income from other sources"}
              handleInputChange={setotherIncome}
            />
            <FormInput
              value={annualInterestIncome}
              fontSize={"sm"}
              label={"Annual income from interest"}
              handleInputChange={setannualInterestIncome}
            />
            <FormInput
              fontSize={"sm"}
              value={rentalIncome}
              handleInputChange={setRentalIncome}
              label={
                "Annual income from let-out house property (rental income)"
              }
            />
            <FormInput
              fontSize={"sm"}
              value={selfOccupiedInterest}
              handleInputChange={setSelfOccupiedInterest}
              label={"Annual interest paid on home loan (self-occupied)"}
            />
            <FormInput
              fontSize={"sm"}
              value={letOutInterest}
              handleInputChange={setLetOutInterest}
              label={"Annual interest paid on home loan (let-out)"}
            />
          </AccordionPanel>
        </AccordionItem>
        <AccordionItem>
          <h2>
            <AccordionButton>
              <Box as="span" flex="1" textAlign="left" fontSize={"2xl"}>
                Deductions
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4} display={"flex"} flexDir={"column"} gap={5}>
            <FormInput
              value={deduction80C}
              handleInputChange={setDeduction80C}
              fontSize={"sm"}
              label={"Basic deductions u/s 80C"}
            />
            <FormInput
              value={npsContribution}
              handleInputChange={setNpsContribution}
              fontSize={"sm"}
              label={"Contribution to NPS u/s 80CCD(1B)"}
            />
            <FormInput
              value={medicalInsurancePremium}
              handleInputChange={setMedicalInsurancePremium}
              fontSize={"sm"}
              label={"Medical Insurance Premium u/s 80D"}
            />
            <FormInput
              value={donation80G}
              handleInputChange={setDonation80G}
              fontSize={"sm"}
              label={"Donation to charity u/s 80G"}
            />
            <FormInput
              value={interest80E}
              handleInputChange={setInterest80E}
              fontSize={"sm"}
              label={"Interest on Educational Loan u/s 80E"}
            />
            <FormInput
              value={interestSavingsAccount}
              handleInputChange={setinterestSavingsAccount}
              fontSize={"sm"}
              label={"Interest on deposits in saving account u/s 80TTA/TTB"}
            />
          </AccordionPanel>
        </AccordionItem>
        <AccordionItem>
          <h2>
            <AccordionButton>
              <Box as="span" flex="1" textAlign="left" fontSize={"2xl"}>
                HRA Exemption
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4} display={"flex"} flexDir={"column"} gap={5}>
            <FormInput
              fontSize={"sm"}
              label={"Basic salary received per annum"}
            />
            <FormInput
              fontSize={"sm"}
              label={"Dearness allowance (DA) received per annum"}
            />
            <FormInput fontSize={"sm"} label={"HRA received per annum"} />
            <FormInput fontSize={"sm"} label={"Total rent paid per annum"} />
          </AccordionPanel>
        </AccordionItem>
      </Accordion>

      <Button onClick={calculateTax}>CALCULATE</Button>
      <HStack
        width={"100%"}
        bgColor={"#2D3748"}
        justifyContent={"space-around"}
        p={10}
      >
        <VStack>
          <Heading fontSize={"xl"} color={"whiteAlpha.600"}>
            Total Tax (new Regime)
          </Heading>
          <CountUp
            start={0}
            end={newTaxLiablity}
            prefix="₹"
            style={{ fontSize: "25px",color:"white" }}
          ></CountUp>
        </VStack>
        <VStack>
          <Heading fontSize={"xl"} color={"whiteAlpha.600"}>
            Total Tax (old Regime)
          </Heading>
          <CountUp
            start={0}
            end={oldTaxLiablity}
            prefix="₹"
            style={{ fontSize: "25px",color:"white" }}
          ></CountUp>
        </VStack>
      </HStack>
    </Box>
  );
};
