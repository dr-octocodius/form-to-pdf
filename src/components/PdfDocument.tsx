import {
  Document,
  Page,
  Text,
  View,
  StyleSheet,
  Font,
} from "@react-pdf/renderer";
import { z } from "zod";

// Register custom fonts (optional)
Font.register({
  family: "Open Sans",
  fonts: [
    {
      src: "https://cdn.jsdelivr.net/npm/open-sans-all@0.1.3/fonts/open-sans-regular.ttf",
    },
    {
      src: "https://cdn.jsdelivr.net/npm/open-sans-all@0.1.3/fonts/open-sans-600.ttf",
      fontWeight: 600,
    },
    {
      src: "https://cdn.jsdelivr.net/npm/open-sans-all@0.1.3/fonts/open-sans-700.ttf",
      fontWeight: 700,
    },
  ],
});

// Define form schema
const formSchema = z.object({
  fullName: z.string(),
  email: z.string(),
  phone: z.string(),
  address: z.string(),
  company: z.string().optional(),
  position: z.string().optional(),
  message: z.string(),
});

type FormData = z.infer<typeof formSchema>;

// Create styles
const styles = StyleSheet.create({
  page: {
    padding: 30,
    backgroundColor: "#ffffff",
    fontFamily: "Open Sans",
  },
  header: {
    marginBottom: 20,
    borderBottom: "1px solid #e5e7eb",
    paddingBottom: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: 700,
    color: "#1f2937",
    marginBottom: 5,
  },
  subtitle: {
    fontSize: 12,
    color: "#6b7280",
  },
  section: {
    marginBottom: 15,
  },
  sectionTitle: {
    fontSize: 14,
    fontWeight: 600,
    color: "#4b5563",
    marginBottom: 8,
    backgroundColor: "#f3f4f6",
    padding: 5,
    borderRadius: 4,
  },
  row: {
    flexDirection: "row",
    marginBottom: 8,
  },
  label: {
    width: "30%",
    fontSize: 12,
    fontWeight: 600,
    color: "#374151",
  },
  value: {
    width: "70%",
    fontSize: 12,
    color: "#1f2937",
  },
  message: {
    fontSize: 12,
    color: "#1f2937",
    lineHeight: 1.5,
    marginTop: 5,
    padding: 10,
    backgroundColor: "#f9fafb",
    borderRadius: 4,
  },
  footer: {
    position: "absolute",
    bottom: 30,
    left: 30,
    right: 30,
    borderTop: "1px solid #e5e7eb",
    paddingTop: 10,
    fontSize: 10,
    color: "#9ca3af",
    textAlign: "center",
  },
  logo: {
    width: 50,
    height: 50,
    marginBottom: 10,
  },
});

// Create PDF Document component
export const PdfDocument = ({ data }: { data: FormData }) => (
  <Document>
    <Page size="A4" style={styles.page}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.title}>Form Submission</Text>
        <Text style={styles.subtitle}>
          Generated on {new Date().toLocaleDateString()}
        </Text>
      </View>

      {/* Personal Information */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Personal Information</Text>

        <View style={styles.row}>
          <Text style={styles.label}>Full Name:</Text>
          <Text style={styles.value}>{data.fullName}</Text>
        </View>

        <View style={styles.row}>
          <Text style={styles.label}>Email:</Text>
          <Text style={styles.value}>{data.email}</Text>
        </View>

        <View style={styles.row}>
          <Text style={styles.label}>Phone:</Text>
          <Text style={styles.value}>{data.phone}</Text>
        </View>

        <View style={styles.row}>
          <Text style={styles.label}>Address:</Text>
          <Text style={styles.value}>{data.address}</Text>
        </View>
      </View>

      {/* Professional Information */}
      {(data.company || data.position) && (
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Professional Information</Text>

          {data.company && (
            <View style={styles.row}>
              <Text style={styles.label}>Company:</Text>
              <Text style={styles.value}>{data.company}</Text>
            </View>
          )}

          {data.position && (
            <View style={styles.row}>
              <Text style={styles.label}>Position:</Text>
              <Text style={styles.value}>{data.position}</Text>
            </View>
          )}
        </View>
      )}

      {/* Message */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Message</Text>
        <Text style={styles.message}>{data.message}</Text>
      </View>

      {/* Footer */}
      <Text style={styles.footer}>
        This document was automatically generated from a form submission. ©{" "}
        {new Date().getFullYear()} Form to PDF Generator
      </Text>
    </Page>
  </Document>
);
