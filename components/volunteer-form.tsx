'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Button } from '@/components/ui/button';

// Define the form schema with validation
const volunteerFormSchema = z.object({
  firstName: z.string().min(1, 'First name is required'),
  lastName: z.string().min(1, 'Last name is required'),
  email: z.string().email('Please enter a valid email address'),
  phone: z.string().optional(),
  opportunity: z.string().min(1, 'Please select an opportunity'),
  message: z.string().min(10, 'Please tell us a bit about why you want to volunteer (minimum 10 characters)'),
});

type VolunteerFormValues = z.infer<typeof volunteerFormSchema>;

interface VolunteerFormProps {
  opportunities: {
    id: number;
    title: string;
  }[];
}

export function VolunteerForm({ opportunities }: VolunteerFormProps) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submissionResult, setSubmissionResult] = useState<{
    success: boolean;
    message: string;
  } | null>(null);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<VolunteerFormValues>({
    resolver: zodResolver(volunteerFormSchema),
  });

  const onSubmit = async (data: VolunteerFormValues) => {
    setIsSubmitting(true);
    setSubmissionResult(null);
    
    try {
      const response = await fetch('/api/volunteer', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();
      
      if (!response.ok) {
        throw new Error(result.error || 'Failed to submit application');
      }

      setSubmissionResult({
        success: true,
        message: result.message || 'Thank you for your application! We will contact you soon.',
      });
      
      // Reset the form on successful submission
      reset();
      
    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmissionResult({
        success: false,
        message: error instanceof Error ? error.message : 'An error occurred while submitting your application',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="mx-auto max-w-3xl">
      <div className="mb-8 text-center">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl" id="volunteer-form">Apply to Volunteer</h2>
        <p className="mt-2 text-gray-500">
          Fill out the form below to express your interest in volunteering with us.
        </p>
      </div>

      {submissionResult && (
        <div
          className={`mb-6 rounded-lg p-4 ${
            submissionResult.success ? 'bg-green-50 text-green-700' : 'bg-red-50 text-red-700'
          }`}
        >
          {submissionResult.message}
        </div>
      )}

      <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
        <div className="grid gap-4 sm:grid-cols-2">
          <div>
            <label htmlFor="firstName" className="mb-2 block text-sm font-medium text-gray-700">
              First Name
            </label>
            <input
              type="text"
              id="firstName"
              {...register('firstName')}
              className={`w-full rounded-md border ${
                errors.firstName ? 'border-red-500' : 'border-gray-300'
              } px-4 py-2 focus:border-custom-darkBlue focus:outline-none focus:ring-1 focus:ring-custom-darkBlue`}
            />
            {errors.firstName && (
              <p className="mt-1 text-xs text-red-500">{errors.firstName.message}</p>
            )}
          </div>
          <div>
            <label htmlFor="lastName" className="mb-2 block text-sm font-medium text-gray-700">
              Last Name
            </label>
            <input
              type="text"
              id="lastName"
              {...register('lastName')}
              className={`w-full rounded-md border ${
                errors.lastName ? 'border-red-500' : 'border-gray-300'
              } px-4 py-2 focus:border-custom-darkBlue focus:outline-none focus:ring-1 focus:ring-custom-darkBlue`}
            />
            {errors.lastName && (
              <p className="mt-1 text-xs text-red-500">{errors.lastName.message}</p>
            )}
          </div>
        </div>
        <div>
          <label htmlFor="email" className="mb-2 block text-sm font-medium text-gray-700">
            Email
          </label>
          <input
            type="email"
            id="email"
            {...register('email')}
            className={`w-full rounded-md border ${
              errors.email ? 'border-red-500' : 'border-gray-300'
            } px-4 py-2 focus:border-custom-darkBlue focus:outline-none focus:ring-1 focus:ring-custom-darkBlue`}
          />
          {errors.email && (
            <p className="mt-1 text-xs text-red-500">{errors.email.message}</p>
          )}
        </div>
        <div>
          <label htmlFor="phone" className="mb-2 block text-sm font-medium text-gray-700">
            Phone Number (Optional)
          </label>
          <input
            type="tel"
            id="phone"
            {...register('phone')}
            className="w-full rounded-md border border-gray-300 px-4 py-2 focus:border-custom-darkBlue focus:outline-none focus:ring-1 focus:ring-custom-darkBlue"
          />
        </div>
        <div>
          <label htmlFor="opportunity" className="mb-2 block text-sm font-medium text-gray-700">
            Interested Opportunity
          </label>
          <select
            id="opportunity"
            {...register('opportunity')}
            className={`w-full rounded-md border ${
              errors.opportunity ? 'border-red-500' : 'border-gray-300'
            } px-4 py-2 focus:border-custom-darkBlue focus:outline-none focus:ring-1 focus:ring-custom-darkBlue`}
          >
            <option value="">Select an opportunity</option>
            {opportunities.map((opportunity) => (
              <option key={opportunity.id} value={opportunity.id}>
                {opportunity.title}
              </option>
            ))}
            <option value="other">Other/General Volunteer</option>
          </select>
          {errors.opportunity && (
            <p className="mt-1 text-xs text-red-500">{errors.opportunity.message}</p>
          )}
        </div>
        <div>
          <label htmlFor="message" className="mb-2 block text-sm font-medium text-gray-700">
            Why do you want to volunteer with us?
          </label>
          <textarea
            id="message"
            rows={4}
            {...register('message')}
            className={`w-full rounded-md border ${
              errors.message ? 'border-red-500' : 'border-gray-300'
            } px-4 py-2 focus:border-custom-darkBlue focus:outline-none focus:ring-1 focus:ring-custom-darkBlue`}
          ></textarea>
          {errors.message && (
            <p className="mt-1 text-xs text-red-500">{errors.message.message}</p>
          )}
        </div>
        <div>
          <Button
            type="submit"
            className="w-full bg-custom-darkBlue hover:bg-custom-darkBlue"
            disabled={isSubmitting}
          >
            {isSubmitting ? 'Submitting...' : 'Submit Application'}
          </Button>
          <p className="mt-2 text-center text-xs text-gray-500">
            Your information will be kept confidential and only used for volunteer coordination purposes.
          </p>
        </div>
      </form>
    </div>
  );
}
