
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

const plans = [
  {
    id: "starter",
    name: "Starter Plan",
    description: "Perfect for small businesses.",
    price: "$10",
  },
  {
    id: "pro",
    name: "Pro Plan",
    description: "Advanced features with more storage.",
    price: "$20",
  },
] as const

export function CardsPaymentMethod() {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-canvas-text-contrast">Payment Method</CardTitle>
        <CardDescription className="text-canvas-text-contrast/70">Add a new payment method to your account.</CardDescription>
      </CardHeader>
      <CardContent className="flex flex-col gap-6">
        <div className="flex flex-col gap-3">
          <Label htmlFor="name" className="text-canvas-text-contrast">Name</Label>
          <Input id="name" placeholder="First Last" />
        </div>
        <fieldset className="flex flex-col gap-3">
          <legend className="text-sm font-medium text-canvas-text-contrast">Plan</legend>
          <p className="text-canvas-text-contrast/70 text-sm">
            Select the plan that best fits your needs.
          </p>
          <RadioGroup defaultValue="starter" className="grid gap-3">
            {plans.map((plan) => (
              <Label
                className="has-[[data-state=checked]]:from-canvas-bg-subtle/90 has-[[data-state=checked]]:to-canvas-bg/70 has-[[data-state=checked]]:bg-gradient-to-br flex items-start gap-3 rounded-lg border-canvas-border p-3"
                key={plan.id}
              >
                <RadioGroupItem
                  value={plan.id}
                  id={plan.name}
                  className="data-[state=checked]:border-canvas-text-contrast"
                />
                <div className="grid gap-1 font-normal">
                  <div className="font-medium text-canvas-text-contrast">{plan.name}</div>
                  <div className="text-canvas-text-contrast/70 pr-2 text-xs leading-snug text-balance">
                    {plan.description}
                  </div>
                </div>
              </Label>
            ))}
          </RadioGroup>
        </fieldset>
        <div className="flex flex-col gap-3">
          <Label htmlFor="number" className="text-canvas-text-contrast">Card number</Label>
          <Input id="number" placeholder="" />
        </div>
        <div className="grid grid-cols-3 gap-4">
          <div className="flex flex-col gap-3">
            <Label htmlFor="month" className="text-canvas-text-contrast">Expires</Label>
            <Select>
              <SelectTrigger id="month" aria-label="Month" className="w-full">
                <SelectValue placeholder="Month" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="1">January</SelectItem>
                <SelectItem value="2">February</SelectItem>
                <SelectItem value="3">March</SelectItem>
                <SelectItem value="4">April</SelectItem>
                <SelectItem value="5">May</SelectItem>
                <SelectItem value="6">June</SelectItem>
                <SelectItem value="7">July</SelectItem>
                <SelectItem value="8">August</SelectItem>
                <SelectItem value="9">September</SelectItem>
                <SelectItem value="10">October</SelectItem>
                <SelectItem value="11">November</SelectItem>
                <SelectItem value="12">December</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="flex flex-col gap-3">
            <Label htmlFor="year" className="text-canvas-text-contrast">Year</Label>
            <Select>
              <SelectTrigger id="year" aria-label="Year" className="w-full">
                <SelectValue placeholder="Year" />
              </SelectTrigger>
              <SelectContent>
                {Array.from({ length: 10 }, (_, i) => (
                  <SelectItem key={i} value={`${new Date().getFullYear() + i}`}>
                    {new Date().getFullYear() + i}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          <div className="flex flex-col gap-3">
            <Label htmlFor="cvc" className="text-canvas-text-contrast">CVC</Label>
            <Input id="cvc" placeholder="CVC" />
          </div>
        </div>
      </CardContent>
      <CardFooter>
        <Button className="w-full">Continue</Button>
      </CardFooter>
    </Card>
  )
}