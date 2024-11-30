export const home_codeblock = `import { Slider } from '@vive-ui/slider'
import { useState } from 'react'
  
export const MySlider = () => {
  const [value, setValue] = useState([30])
    
  return (
    <Slider.Root
      min={-50}
      max={50}
      value={value}
      onValueChange={(e) => setValue(e.value)}
    >
      <Slider.Label>Label</Slider.Label>
      <Slider.ValueText>{value}</Slider.ValueText>
      <Slider.Control>
        <Slider.Track>
          <Slider.Range />
        </Slider.Track>
        <Slider.Thumb index={0} />
      </Slider.Control>
    </Slider.Root>
  )
}`;
