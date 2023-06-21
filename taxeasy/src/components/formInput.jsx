import { Box, Flex, FormControl, FormLabel, Input } from '@chakra-ui/react'
export const FormInput = ({value,handleInputChange,label,name,fontSize}) => {
  return (
        <FormControl>
              <Flex justifyContent={"space-between"} alignItems={"center"}>
                <FormLabel fontSize={fontSize}>
                  {label}
                </FormLabel>
                <Box
                  display={"flex"}
                  flexDir={"column"}
                  alignItems={"flex-start"}
                >
                  <Input
                    type="number"
                    name={name}
                    value={value || ""}
                    onChange={(e)=>handleInputChange(Number(e.target.value))}
                    placeholder='XXXX'
                  />
                </Box>
              </Flex>
            </FormControl>
  )
}
