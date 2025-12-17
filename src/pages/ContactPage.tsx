import React from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { useSearchParams } from 'react-router-dom';
import { toast } from 'sonner';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { api } from '@/lib/api-client';
import { Lead } from '@shared/types';
import { Loader2, MapPin, Phone, Mail } from 'lucide-react';
const leadSchema = z.object({
  name: z.string().min(2, 'El nombre es requerido'),
  email: z.string().email('Email inválido'),
  phone: z.string().min(8, 'El teléfono es requerido'),
  project: z.enum(['terralba', 'general']),
  message: z.string().optional(),
});
type LeadFormValues = z.infer<typeof leadSchema>;
export function ContactPage() {
  const [searchParams] = useSearchParams();
  const projectParam = searchParams.get('project');
  const form = useForm<LeadFormValues>({
    resolver: zodResolver(leadSchema),
    defaultValues: {
      name: '',
      email: '',
      phone: '',
      project: projectParam === 'terralba' ? 'terralba' : 'general',
      message: '',
    },
  });
  const { isSubmitting } = form.formState;
  async function onSubmit(values: LeadFormValues) {
    try {
      await api<Lead>('/api/leads', {
        method: 'POST',
        body: JSON.stringify(values),
      });
      toast.success('¡Consulta enviada! Nos pondremos en contacto a la brevedad.');
      form.reset();
    } catch (error) {
      toast.error('Hubo un error al enviar tu consulta. Por favor, intentá de nuevo.');
    }
  }
  return (
    <>
      <div className="pt-24 pb-12 md:pt-32 md:pb-20 bg-muted">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-display font-extrabold text-foreground sm:text-5xl md:text-6xl">
            Contacto
          </h1>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-muted-foreground">
            Estamos para ayudarte a encontrar la mejor inversión.
          </p>
        </div>
      </div>
      <div className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <Card className="shadow-lg">
              <CardHeader>
                <CardTitle className="text-3xl font-display">Envianos tu consulta</CardTitle>
                <CardDescription>Completá el formulario y un asesor se comunicará con vos.</CardDescription>
              </CardHeader>
              <CardContent>
                <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                    <FormField
                      control={form.control}
                      name="name"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Nombre y Apellido</FormLabel>
                          <FormControl>
                            <Input placeholder="Juan Pérez" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Email</FormLabel>
                            <FormControl>
                              <Input placeholder="juan.perez@email.com" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="phone"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Teléfono</FormLabel>
                            <FormControl>
                              <Input placeholder="381 123 4567" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>
                    <FormField
                      control={form.control}
                      name="project"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Proyecto de Interés</FormLabel>
                          <Select onValueChange={field.onChange} value={field.value}>
                            <FormControl>
                              <SelectTrigger>
                                <SelectValue placeholder="Seleccioná un proyecto" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              <SelectItem value="terralba">Terralba</SelectItem>
                              <SelectItem value="general">Consulta General</SelectItem>
                            </SelectContent>
                          </Select>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="message"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Mensaje (Opcional)</FormLabel>
                          <FormControl>
                            <Textarea placeholder="Escribí tu consulta ac��..." className="resize-none" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <Button type="submit" className="w-full bg-evercity-red hover:bg-evercity-red/90" size="lg" disabled={isSubmitting}>
                      {isSubmitting && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
                      Enviar Consulta
                    </Button>
                  </form>
                </Form>
              </CardContent>
            </Card>
            <div className="space-y-8">
              <Card className="shadow-lg">
                <CardHeader>
                  <CardTitle className="text-3xl font-display">Nuestra Oficina</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4 text-lg">
                  <div className="flex items-start">
                    <MapPin className="h-6 w-6 mr-4 mt-1 flex-shrink-0 text-evercity-red" />
                    <span>Virgen de la Merced 128, San Miguel de Tucumán, Argentina</span>
                  </div>
                  <div className="flex items-center">
                    <Phone className="h-6 w-6 mr-4 flex-shrink-0 text-evercity-red" />
                    <a href="tel:3816212142" className="hover:text-evercity-red transition-colors">3816 21-2142</a>
                  </div>
                  <div className="flex items-center">
                    <Mail className="h-6 w-6 mr-4 flex-shrink-0 text-evercity-red" />
                    <a href="mailto:evercitydi@gmail.com" className="hover:text-evercity-red transition-colors">evercitydi@gmail.com</a>
                  </div>
                </CardContent>
              </Card>
              <div className="aspect-video">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3560.369848249835!2d-65.2062006849569!3d-26.82818398316024!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94225c1b8db53147%3A0x18cb5b4257c1334c!2sNuestra%20Se%C3%B1ora%20de%20la%20Merced%20128%2C%20T4000IWC%20San%20Miguel%20de%20Tucum%C3%A1n%2C%20Tucum%C3%A1n!5e0!3m2!1sen!2sar!4v1680000000000"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen={false}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="rounded-lg shadow-lg"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}