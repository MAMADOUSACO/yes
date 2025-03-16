'use client';

import React, { useState } from 'react';
import { Slider } from '@/components/ui/slider';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
import {
  ColorPicker,
  HexColorPickerField,
  RgbColorPickerField,
  HslColorPickerField,
} from '@/components/ui/color-picker';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';

export default function ComponentsShowcase() {
  // State for sliders
  const [volumeValue, setVolumeValue] = useState([50]);
  const [opacityValue, setOpacityValue] = useState([0.7]);
  const [rangeValue, setRangeValue] = useState([25]);

  // State for color pickers
  const [hexColor, setHexColor] = useState('#3b82f6');
  const [rgbColor, setRgbColor] = useState({ r: 59, g: 130, b: 246 });
  const [hslColor, setHslColor] = useState({ h: 217, s: 91, l: 60 });

  return (
    <div className="container mx-auto p-8">
      <h1 className="mb-12 text-4xl font-bold">UI Components Showcase</h1>

      {/* Main Tabs for Component Categories */}
      <Tabs defaultValue="sliders" className="w-full">
        <TabsList className="mb-8 w-full">
          <TabsTrigger value="sliders">Sliders</TabsTrigger>
          <TabsTrigger value="tabs">Tabs</TabsTrigger>
          <TabsTrigger value="colorpickers">Color Pickers</TabsTrigger>
        </TabsList>

        {/* SLIDERS SECTION */}
        <TabsContent value="sliders" className="space-y-8">
          <h2 className="text-3xl font-bold">Slider Components</h2>
          <p className="mb-6 text-lg text-slate-700 dark:text-slate-300">
            Sliders provide an intuitive way to select values from a range.
          </p>

          {/* Basic Slider Examples */}
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle>Basic Slider</CardTitle>
                <CardDescription>Default slider with value display</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <h3 className="mb-2 font-medium">Volume: {volumeValue[0]}%</h3>
                  <Slider
                    value={volumeValue}
                    onValueChange={setVolumeValue}
                    min={0}
                    max={100}
                    step={1}
                    showValueLabel
                    formatValue={(value) => `${value}%`}
                  />
                </div>

                <div>
                  <h3 className="mb-2 font-medium">
                    Opacity: {Math.round(opacityValue[0] * 100)}%
                  </h3>
                  <Slider
                    value={opacityValue}
                    onValueChange={setOpacityValue}
                    min={0}
                    max={1}
                    step={0.01}
                    showValueLabel
                    formatValue={(value) => `${Math.round(value * 100)}%`}
                  />
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Slider Variants</CardTitle>
                <CardDescription>Different styles and sizes</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <h3 className="mb-2 font-medium">Primary Variant</h3>
                  <Slider variant="primary" defaultValue={[60]} showValueLabel />
                </div>

                <div>
                  <h3 className="mb-2 font-medium">Accent Variant (Small)</h3>
                  <Slider variant="accent" size="sm" defaultValue={[40]} />
                </div>

                <div>
                  <h3 className="mb-2 font-medium">Success Variant (Large)</h3>
                  <Slider variant="success" size="lg" defaultValue={[80]} />
                </div>

                <div>
                  <h3 className="mb-2 font-medium">Warning & Danger</h3>
                  <Slider variant="warning" thumbVariant="danger" defaultValue={[30]} />
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Special Slider Examples */}
          <Card>
            <CardHeader>
              <CardTitle>Range Selection</CardTitle>
              <CardDescription>
                Adjust the minimum value to see how the slider adapts
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <h3 className="font-medium">Range Min: {rangeValue[0]}</h3>
                <Slider
                  value={rangeValue}
                  onValueChange={setRangeValue}
                  min={0}
                  max={100}
                  step={1}
                  variant="primary"
                  showValueLabel
                />

                <div className="mt-8">
                  <h3 className="mb-2 font-medium">Value Limited to Range Min: {rangeValue[0]}</h3>
                  <Slider
                    min={rangeValue[0]}
                    max={100}
                    defaultValue={[Math.max(rangeValue[0], 50)]}
                    variant="success"
                  />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Disabled State</CardTitle>
              <CardDescription>Slider in disabled state</CardDescription>
            </CardHeader>
            <CardContent>
              <Slider defaultValue={[50]} disabled />
            </CardContent>
          </Card>
        </TabsContent>

        {/* TABS SECTION */}
        <TabsContent value="tabs" className="space-y-8">
          <h2 className="text-3xl font-bold">Tabs Components</h2>
          <p className="mb-6 text-lg text-slate-700 dark:text-slate-300">
            Tabs organize content into separate views that users can navigate between.
          </p>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            {/* Default Tabs */}
            <Card>
              <CardHeader>
                <CardTitle>Default Tabs</CardTitle>
                <CardDescription>Standard styling with background</CardDescription>
              </CardHeader>
              <CardContent>
                <Tabs defaultValue="tab1">
                  <TabsList>
                    <TabsTrigger value="tab1">Account</TabsTrigger>
                    <TabsTrigger value="tab2">Settings</TabsTrigger>
                    <TabsTrigger value="tab3">Notifications</TabsTrigger>
                  </TabsList>
                  <TabsContent value="tab1" className="mt-2 rounded-md border p-4">
                    <h3 className="mb-2 font-semibold">Account Settings</h3>
                    <p>Manage your account preferences here.</p>
                  </TabsContent>
                  <TabsContent value="tab2" className="mt-2 rounded-md border p-4">
                    <h3 className="mb-2 font-semibold">App Settings</h3>
                    <p>Configure app behavior and appearance.</p>
                  </TabsContent>
                  <TabsContent value="tab3" className="mt-2 rounded-md border p-4">
                    <h3 className="mb-2 font-semibold">Notifications</h3>
                    <p>Manage your notification preferences.</p>
                  </TabsContent>
                </Tabs>
              </CardContent>
            </Card>

            {/* Underline Tabs */}
            <Card>
              <CardHeader>
                <CardTitle>Underline Tabs</CardTitle>
                <CardDescription>Minimal style with underline indicators</CardDescription>
              </CardHeader>
              <CardContent>
                <Tabs defaultValue="day" variant="underline">
                  <TabsList variant="underline">
                    <TabsTrigger value="day" variant="underline">
                      Day
                    </TabsTrigger>
                    <TabsTrigger value="week" variant="underline">
                      Week
                    </TabsTrigger>
                    <TabsTrigger value="month" variant="underline">
                      Month
                    </TabsTrigger>
                  </TabsList>
                  <TabsContent value="day" className="mt-2 rounded-md border p-4">
                    <h3 className="mb-2 font-semibold">Daily View</h3>
                    <p>View detailed hourly breakdown.</p>
                  </TabsContent>
                  <TabsContent value="week" className="mt-2 rounded-md border p-4">
                    <h3 className="mb-2 font-semibold">Weekly View</h3>
                    <p>See your entire week at a glance.</p>
                  </TabsContent>
                  <TabsContent value="month" className="mt-2 rounded-md border p-4">
                    <h3 className="mb-2 font-semibold">Monthly View</h3>
                    <p>Plan your month with calendar view.</p>
                  </TabsContent>
                </Tabs>
              </CardContent>
            </Card>

            {/* Pill Tabs */}
            <Card>
              <CardHeader>
                <CardTitle>Pill Tabs</CardTitle>
                <CardDescription>Rounded pill style tabs</CardDescription>
              </CardHeader>
              <CardContent>
                <Tabs defaultValue="all" variant="pill">
                  <TabsList
                    variant="pill"
                    className="rounded-full bg-slate-100 p-1 dark:bg-slate-800"
                  >
                    <TabsTrigger value="all" variant="pill">
                      All
                    </TabsTrigger>
                    <TabsTrigger value="active" variant="pill">
                      Active
                    </TabsTrigger>
                    <TabsTrigger value="completed" variant="pill">
                      Completed
                    </TabsTrigger>
                  </TabsList>
                  <TabsContent value="all" className="mt-2 rounded-md border p-4">
                    <p>Showing all items (10)</p>
                  </TabsContent>
                  <TabsContent value="active" className="mt-2 rounded-md border p-4">
                    <p>Showing active items (4)</p>
                  </TabsContent>
                  <TabsContent value="completed" className="mt-2 rounded-md border p-4">
                    <p>Showing completed items (6)</p>
                  </TabsContent>
                </Tabs>
              </CardContent>
            </Card>

            {/* Full Width Tabs */}
            <Card>
              <CardHeader>
                <CardTitle>Full Width Tabs</CardTitle>
                <CardDescription>Tabs that fill the available space</CardDescription>
              </CardHeader>
              <CardContent>
                <Tabs defaultValue="design" variant="outline">
                  <TabsList variant="outline" fullWidth>
                    <TabsTrigger value="design" variant="outline" fullWidth>
                      Design
                    </TabsTrigger>
                    <TabsTrigger value="code" variant="outline" fullWidth>
                      Code
                    </TabsTrigger>
                    <TabsTrigger value="preview" variant="outline" fullWidth>
                      Preview
                    </TabsTrigger>
                  </TabsList>
                  <TabsContent value="design" className="mt-2 rounded-md border p-4">
                    <p>Design tools and options</p>
                  </TabsContent>
                  <TabsContent value="code" className="mt-2 rounded-md border p-4">
                    <p>Code editor and options</p>
                  </TabsContent>
                  <TabsContent value="preview" className="mt-2 rounded-md border p-4">
                    <p>Preview of the final result</p>
                  </TabsContent>
                </Tabs>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        {/* COLOR PICKERS SECTION */}
        <TabsContent value="colorpickers" className="space-y-8">
          <h2 className="text-3xl font-bold">Color Picker Components</h2>
          <p className="mb-6 text-lg text-slate-700 dark:text-slate-300">
            Color pickers allow users to select colors in various formats.
          </p>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            {/* Hex Color Picker */}
            <Card>
              <CardHeader>
                <CardTitle>Hex Color Picker</CardTitle>
                <CardDescription>Select colors using hexadecimal format</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-col gap-4">
                  <HexColorPickerField
                    color={hexColor}
                    onChange={setHexColor}
                    label="Primary Color"
                  />

                  <div className="mt-4">
                    <h3 className="mb-2 font-medium">Selected Color:</h3>
                    <div
                      className="h-12 w-full rounded-md border"
                      style={{ backgroundColor: hexColor }}
                    />
                    <p className="mt-2 text-center">{hexColor}</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* RGB Color Picker */}
            <Card>
              <CardHeader>
                <CardTitle>RGB Color Picker</CardTitle>
                <CardDescription>Select colors using RGB values</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-col gap-4">
                  <RgbColorPickerField
                    color={rgbColor}
                    onChange={setRgbColor}
                    label="RGB Color"
                    variant="inline"
                  />

                  <div className="mt-4">
                    <h3 className="mb-2 font-medium">Selected Color:</h3>
                    <div
                      className="h-12 w-full rounded-md border"
                      style={{
                        backgroundColor: `rgb(${rgbColor.r}, ${rgbColor.g}, ${rgbColor.b})`,
                      }}
                    />
                    <p className="mt-2 text-center">
                      rgb({rgbColor.r}, {rgbColor.g}, {rgbColor.b})
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* HSL Color Picker */}
            <Card>
              <CardHeader>
                <CardTitle>HSL Color Picker</CardTitle>
                <CardDescription>
                  Select colors using Hue, Saturation, and Lightness
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-col gap-4">
                  <HslColorPickerField
                    color={hslColor}
                    onChange={setHslColor}
                    label="HSL Color"
                    size="lg"
                  />

                  <div className="mt-4">
                    <h3 className="mb-2 font-medium">Selected Color:</h3>
                    <div
                      className="h-12 w-full rounded-md border"
                      style={{
                        backgroundColor: `hsl(${hslColor.h}, ${hslColor.s}%, ${hslColor.l}%)`,
                      }}
                    />
                    <p className="mt-2 text-center">
                      hsl({hslColor.h}, {hslColor.s}%, {hslColor.l}%)
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Color Picker Sizes and Variants */}
            <Card>
              <CardHeader>
                <CardTitle>Picker Sizes and Variants</CardTitle>
                <CardDescription>Different sizes and presentation styles</CardDescription>
              </CardHeader>
              <CardContent>
                <Tabs defaultValue="sizes" className="w-full">
                  <TabsList>
                    <TabsTrigger value="sizes">Sizes</TabsTrigger>
                    <TabsTrigger value="variants">Variants</TabsTrigger>
                  </TabsList>

                  <TabsContent value="sizes" className="space-y-6 pt-4">
                    <div>
                      <h3 className="mb-2 font-medium">Small Size</h3>
                      <ColorPicker
                        format="hex"
                        color="#4338ca"
                        onChange={() => {}}
                        size="sm"
                        showInput={false}
                      />
                    </div>

                    <div>
                      <h3 className="mb-2 font-medium">Large Size</h3>
                      <ColorPicker
                        format="hex"
                        color="#0891b2"
                        onChange={() => {}}
                        size="lg"
                        showInput={false}
                      />
                    </div>
                  </TabsContent>

                  <TabsContent value="variants" className="space-y-6 pt-4">
                    <div>
                      <h3 className="mb-2 font-medium">Inline Variant</h3>
                      <ColorPicker
                        format="hex"
                        color="#6d28d9"
                        onChange={() => {}}
                        variant="inline"
                        showInput={false}
                      />
                    </div>

                    <div>
                      <h3 className="mb-2 font-medium">
                        Popover Style (for illustrative purposes)
                      </h3>
                      <ColorPicker
                        format="hex"
                        color="#db2777"
                        onChange={() => {}}
                        variant="popover"
                        size="sm"
                        showInput={false}
                      />
                    </div>
                  </TabsContent>
                </Tabs>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
      </Tabs>

      {/* Back to home link */}
      <div className="mt-16 text-center">
        <a href="/" className="text-blue-500 hover:underline">
          Back to Home
        </a>
      </div>
    </div>
  );
}
