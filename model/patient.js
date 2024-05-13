// const { pool } = require('./db');

// async function addPatient(patientData) {
//   try {
//     const request = pool.request();

//     // Define the SQL query with parameter placeholders
//     const query = `
//   INSERT INTO dbo.CancerScreeningSonapur (
//     ID, Name, Address, DOB, Village, Gender, PIN, DOE, Contact, Occupation,
//     MonthlyIncome, Education, CancerHistory, Latitude, Longitude, Pulse, BP,
//     Height, Weight, SugarLvl, MedicalHistory, FCancerHistory,
//     FamIncome, TobaccoYears, TobaccoMon, TobaccoF, TobaccoT, TobaccoW,
//     GutkaYears, GutkaMon, GutkaF, GutkaT, GutkaW,
//     BidiYears, BidiMon, BidiF, BidiT, BidiW,
//     CigaretteYears, CigaretteMon, CigaretteF, CigaretteT, CigaretteW,
//     BetelnutYears, BetelnutMon, BetelnutF, BetelnutT, BetelnutW,
//     PaanMasalaYears, PaanMasalaMon, PaanMasalaF, PaanMasalaT, PaanMasalaW,
//     AlcoholCommercialYears, AlcoholCommercialMon, AlcoholCommercialF,
//     AlcoholCommercialT, AlcoholCommercialW, AlcoholHomeBrewedYears,
//     AlcoholHomeBrewedMon, AlcoholHomeBrewedF, AlcoholHomeBrewedT,
//     AlcoholHomeBrewedW, AwareHarmeffectofTobbacco, UndergoneCancerScreening,
//     TobaccoCausesCancer, CancerIsCurable,OralCavity, IfAbnormal, OralHygiene, REFFHC,
//     OVEClinicalDiagnosis, OVETreatment, OVEDoctor,
//     Skin, Nipple, Size, LBreast, RBreast,
//     CBERHC, CBEInvestigation, CBEDoctor, LMP,ObstetricHis, ChiefComplaints, AppearanceCervix, ExternalOS,
//     NabothianCyst, Polyp, VaginalWC, FindingsViaTest,
//     CCSImpression, CCSRHC, NILM, EpithermalCA,
//     SquamousCA, PAPComment, GlanDuralCA, CCSInvestigation,
//     CCSDoctor, LTDorsum, RTDorsum, LTVentral,
//     RTVentral, Date, Time, IPAddress,
//     PAPReport, PPE_FLAG, OVE_FLAG, OBE_FLAG,
//     CCE_FLAG
//   )
//   VALUES (
//     @ID, @Name, @Address, @DOB, @Village, @Gender, @PIN, @DOE, @Contact, @Occupation,
//     @MonthlyIncome, @Education, @CancerHistory, @Latitude, @Longitude, @Pulse, @BP,
//     @Height, @Weight, @SugarLvl, @MedicalHistory, @FCancerHistory,
//     @FamIncome, @TobaccoYears, @TobaccoMon, @TobaccoF, @TobaccoT, @TobaccoW,
//     @GutkaYears, @GutkaMon, @GutkaF, @GutkaT, @GutkaW,
//     @BidiYears, @BidiMon, @BidiF, @BidiT, @BidiW,
//     @CigaretteYears, @CigaretteMon, @CigaretteF, @CigaretteT, @CigaretteW,
//     @BetelnutYears, @BetelnutMon, @BetelnutF, @BetelnutT, @BetelnutW,
//     @PaanMasalaYears, @PaanMasalaMon, @PaanMasalaF, @PaanMasalaT, @PaanMasalaW,
//     @AlcoholCommercialYears, @AlcoholCommercialMon, @AlcoholCommercialF,
//     @AlcoholCommercialT, @AlcoholCommercialW, @AlcoholHomeBrewedYears,
//     @AlcoholHomeBrewedMon, @AlcoholHomeBrewedF, @AlcoholHomeBrewedT,
//     @AlcoholHomeBrewedW, @AwareHarmeffectofTobbacco, @UndergoneCancerScreening,
//     @TobaccoCausesCancer, @CancerIsCurable,@OralCavity, @IfAbnormal, @OralHygiene, @REFFHC,
//     @OVEClinicalDiagnosis, @OVETreatment, @OVEDoctor,
//     @Skin, @Nipple, @Size, @LBreast, @RBreast,
//     @CBERHC, @CBEInvestigation, @CBEDoctor, @LMP,@ObstetricHis, @ChiefComplaints, @AppearanceCervix, @ExternalOS,
//     @NabothianCyst, @Polyp, @VaginalWC, @FindingsViaTest,
//     @CCSImpression, @CCSRHC, @NILM, @EpithermalCA,
//     @SquamousCA, @PAPComment, @GlanDuralCA, @CCSInvestigation,
//     @CCSDoctor, @LTDorsum, @RTDorsum, @LTVentral,
//     @RTVentral, @Date, @Time, @IPAddress,
//     @PAPReport, @PPE_FLAG, @OVE_FLAG, @OBE_FLAG,
//     @CCE_FLAG
//   )
// `;

  


//     // Execute the query with parameters
//     const result = await request
//   .input('ID', patientData.ID)
//   .input('Name', patientData.Name)
//   .input('Address', patientData.Address)
//   .input('DOB', patientData.DOB)
//   .input('Village', patientData.Village)
//   .input('Gender', patientData.Gender)
//   .input('PIN', patientData.PIN)
//   .input('DOE', patientData.DOE)
//   .input('Contact', patientData.Contact)
//   .input('Occupation', patientData.Occupation)
//   .input('MonthlyIncome', patientData.MonthlyIncome)
//   .input('Education', patientData.Education)
//   .input('CancerHistory', patientData.CancerHistory)
//   .input('Latitude', patientData.Latitude)
//   .input('Longitude', patientData.Longitude)
//   .input('Pulse', patientData.Pulse)
//   .input('BP', patientData.BP)
//   .input('Height', patientData.Height)
//   .input('Weight', patientData.Weight)
//   .input('SugarLvl', patientData.SugarLvl)
//   .input('MedicalHistory', patientData.MedicalHistory)
//   .input('FCancerHistory', patientData.FCancerHistory)
//   .input('FamIncome', patientData.FamIncome)
//   .input('TobaccoYears', patientData.TobaccoYears)
//   .input('TobaccoMon', patientData.TobaccoMon)
//   .input('TobaccoF', patientData.TobaccoF)
//   .input('TobaccoT', patientData.TobaccoT)
//   .input('TobaccoW', patientData.TobaccoW)
//   .input('GutkaYears', patientData.GutkaYears)
//   .input('GutkaMon', patientData.GutkaMon)
//   .input('GutkaF', patientData.GutkaF)
//   .input('GutkaT', patientData.GutkaT)
//   .input('GutkaW', patientData.GutkaW)
//   .input('BidiYears', patientData.BidiYears)
//   .input('BidiMon', patientData.BidiMon)
//   .input('BidiF', patientData.BidiF)
//   .input('BidiT', patientData.BidiT)
//   .input('BidiW', patientData.BidiW)
//   .input('CigaretteYears', patientData.CigaretteYears)
//   .input('CigaretteMon', patientData.CigaretteMon)
//   .input('CigaretteF', patientData.CigaretteF)
//   .input('CigaretteT', patientData.CigaretteT)
//   .input('CigaretteW', patientData.CigaretteW)
//   .input('BetelnutYears', patientData.BetelnutYears)
//   .input('BetelnutMon', patientData.BetelnutMon)
//   .input('BetelnutF', patientData.BetelnutF)
//   .input('BetelnutT', patientData.BetelnutT)
//   .input('BetelnutW', patientData.BetelnutW)
//   .input('PaanMasalaYears', patientData.PaanMasalaYears)
//   .input('PaanMasalaMon', patientData.PaanMasalaMon)
//   .input('PaanMasalaF', patientData.PaanMasalaF)
//   .input('PaanMasalaT', patientData.PaanMasalaT)
//   .input('PaanMasalaW', patientData.PaanMasalaW)
//   .input('AlcoholCommercialYears', patientData.AlcoholCommercialYears)
//   .input('AlcoholCommercialMon', patientData.AlcoholCommercialMon)
//   .input('AlcoholCommercialF', patientData.AlcoholCommercialF)
//   .input('AlcoholCommercialT', patientData.AlcoholCommercialT)
//   .input('AlcoholCommercialW', patientData.AlcoholCommercialW)
//   .input('AlcoholHomeBrewedYears', patientData.AlcoholHomeBrewedYears)
//   .input('AlcoholHomeBrewedMon', patientData.AlcoholHomeBrewedMon)
//   .input('AlcoholHomeBrewedF', patientData.AlcoholHomeBrewedF)
//   .input('AlcoholHomeBrewedT', patientData.AlcoholHomeBrewedT)
//   .input('AlcoholHomeBrewedW', patientData.AlcoholHomeBrewedW)
//   .input('AwareHarmeffectofTobbacco', patientData.AwareHarmeffectofTobbacco)
//   .input('UndergoneCancerScreening', patientData.UndergoneCancerScreening)
//   .input('TobaccoCausesCancer', patientData.TobaccoCausesCancer)
//   .input('CancerIsCurable', patientData.CancerIsCurable)
//   .input('OralCavity', patientData.OralCavity)
//   .input('IfAbnormal', patientData.IfAbnormal)
//   .input('OralHygiene', patientData.OralHygiene)
//   .input('REFFHC', patientData.REFFHC)
//   .input('OVEClinicalDiagnosis', patientData.OVEClinicalDiagnosis)
//   .input('OVETreatment', patientData.OVETreatment)
//   .input('OVEDoctor', patientData.OVEDoctor)
//   .input('Skin', patientData.Skin)
//   .input('Nipple', patientData.Nipple)
//   .input('Size', patientData.Size)
//   .input('LBreast', patientData.LBreast)
//   .input('RBreast', patientData.RBreast)
//   .input('CBERHC', patientData.CBERHC)
//   .input('CBEInvestigation', patientData.CBEInvestigation)
//   .input('CBEDoctor', patientData.CBEDoctor)
//   .input('LMP', patientData.LMP)
//   .input('ObstetricHis', patientData.ObstetricHis)
//   .input('ChiefComplaints', patientData.ChiefComplaints)
//   .input('AppearanceCervix', patientData.AppearanceCervix)
//   .input('ExternalOS', patientData.ExternalOS)
//   .input('NabothianCyst', patientData.NabothianCyst)
//   .input('Polyp', patientData.Polyp)
//   .input('VaginalWC', patientData.VaginalWC)
//   .input('FindingsViaTest', patientData.FindingsViaTest)
//   .input('CCSImpression', patientData.CCSImpression)
//   .input('CCSRHC', patientData.CCSRHC)
//   .input('NILM', patientData.NILM)
//   .input('EpithermalCA', patientData.EpithermalCA)
//   .input('SquamousCA', patientData.SquamousCA)
//   .input('PAPComment', patientData.PAPComment)
//   .input('GlanDuralCA', patientData.GlanDuralCA)
//   .input('CCSInvestigation', patientData.CCSInvestigation)
//   .input('CCSDoctor', patientData.CCSDoctor)
//   .input('LTDorsum', patientData.LTDorsum)
//   .input('RTDorsum', patientData.RTDorsum)
//   .input('LTVentral', patientData.LTVentral)
//   .input('RTVentral', patientData.RTVentral)
//   .input('Date', patientData.Date)
//   .input('Time', patientData.Time)
//   .input('IPAddress', patientData.IPAddress)
//   .input('PAPReport', patientData.PAPReport)
//   .input('PPE_FLAG', patientData.PPE_FLAG)
//   .input('OVE_FLAG', patientData.OVE_FLAG)
//   .input('OBE_FLAG', patientData.OBE_FLAG)
//   .input('CCE_FLAG', patientData.CCE_FLAG)
//   .query(query);

//     return result.rowsAffected[0];
//   } catch (error) {
//     console.error('Error adding patient:', error);
//     throw error;
//   }
// }

// module.exports = {
//   addPatient,
// };

const { pool } = require('./db');

async function addPatients(patientDataArray) {
  try {
    // Create a promise array to store all the individual insertion promises
    const insertionPromises = patientDataArray.map(async (patientData) => {
      const request = pool.request();

      // Define the SQL query with parameter placeholders
      const query = `
      INSERT INTO dbo.CancerScreeningSonapur (
        ID, Name, Address, DOB, Village, Gender, PIN, DOE, Contact, Occupation,
        MonthlyIncome, Education, CancerHistory, Latitude, Longitude, Pulse, BP,
        Height, Weight, SugarLvl, MedicalHistory, FCancerHistory,
        FamIncome, TobaccoYears, TobaccoMon, TobaccoF, TobaccoT, TobaccoW,
        GutkaYears, GutkaMon, GutkaF, GutkaT, GutkaW,
        BidiYears, BidiMon, BidiF, BidiT, BidiW,
        CigaretteYears, CigaretteMon, CigaretteF, CigaretteT, CigaretteW,
        BetelnutYears, BetelnutMon, BetelnutF, BetelnutT, BetelnutW,
        PaanMasalaYears, PaanMasalaMon, PaanMasalaF, PaanMasalaT, PaanMasalaW,
        AlcoholCommercialYears, AlcoholCommercialMon, AlcoholCommercialF,
        AlcoholCommercialT, AlcoholCommercialW, AlcoholHomeBrewedYears,
        AlcoholHomeBrewedMon, AlcoholHomeBrewedF, AlcoholHomeBrewedT,
        AlcoholHomeBrewedW, AwareHarmeffectofTobbacco, UndergoneCancerScreening,
        TobaccoCausesCancer, CancerIsCurable,OralCavity, IfAbnormal, OralHygiene, REFFHC,
        OVEClinicalDiagnosis, OVETreatment, OVEDoctor,
        Skin, Nipple, Size, LBreast, RBreast,
        CBERHC, CBEInvestigation, CBEDoctor, LMP,ObstetricHis, ChiefComplaints, AppearanceCervix, ExternalOS,
        NabothianCyst, Polyp, VaginalWC, FindingsViaTest,
        CCSImpression, CCSRHC, NILM, EpithermalCA,
        SquamousCA, PAPComment, GlanDuralCA, CCSInvestigation,
        CCSDoctor, LTDorsum, RTDorsum, LTVentral,
        RTVentral, Date, Time, IPAddress,
        PAPReport, PPE_FLAG, OVE_FLAG, OBE_FLAG,
        CCE_FLAG
      )
      VALUES (
        @ID, @Name, @Address, @DOB, @Village, @Gender, @PIN, @DOE, @Contact, @Occupation,
        @MonthlyIncome, @Education, @CancerHistory, @Latitude, @Longitude, @Pulse, @BP,
        @Height, @Weight, @SugarLvl, @MedicalHistory, @FCancerHistory,
        @FamIncome, @TobaccoYears, @TobaccoMon, @TobaccoF, @TobaccoT, @TobaccoW,
        @GutkaYears, @GutkaMon, @GutkaF, @GutkaT, @GutkaW,
        @BidiYears, @BidiMon, @BidiF, @BidiT, @BidiW,
        @CigaretteYears, @CigaretteMon, @CigaretteF, @CigaretteT, @CigaretteW,
        @BetelnutYears, @BetelnutMon, @BetelnutF, @BetelnutT, @BetelnutW,
        @PaanMasalaYears, @PaanMasalaMon, @PaanMasalaF, @PaanMasalaT, @PaanMasalaW,
        @AlcoholCommercialYears, @AlcoholCommercialMon, @AlcoholCommercialF,
        @AlcoholCommercialT, @AlcoholCommercialW, @AlcoholHomeBrewedYears,
        @AlcoholHomeBrewedMon, @AlcoholHomeBrewedF, @AlcoholHomeBrewedT,
        @AlcoholHomeBrewedW, @AwareHarmeffectofTobbacco, @UndergoneCancerScreening,
        @TobaccoCausesCancer, @CancerIsCurable,@OralCavity, @IfAbnormal, @OralHygiene, @REFFHC,
        @OVEClinicalDiagnosis, @OVETreatment, @OVEDoctor,
        @Skin, @Nipple, @Size, @LBreast, @RBreast,
        @CBERHC, @CBEInvestigation, @CBEDoctor, @LMP,@ObstetricHis, @ChiefComplaints, @AppearanceCervix, @ExternalOS,
        @NabothianCyst, @Polyp, @VaginalWC, @FindingsViaTest,
        @CCSImpression, @CCSRHC, @NILM, @EpithermalCA,
        @SquamousCA, @PAPComment, @GlanDuralCA, @CCSInvestigation,
        @CCSDoctor, @LTDorsum, @RTDorsum, @LTVentral,
        @RTVentral, @Date, @Time, @IPAddress,
        @PAPReport, @PPE_FLAG, @OVE_FLAG, @OBE_FLAG,
        @CCE_FLAG
      )
      `;

      // Execute the query for the current patient object
      const result = await request
  .input('ID', patientData.ID)
  .input('Name', patientData.Name)
  .input('Address', patientData.Address)
  .input('DOB', patientData.DOB)
  .input('Village', patientData.Village)
  .input('Gender', patientData.Gender)
  .input('PIN', patientData.PIN)
  .input('DOE', patientData.DOE)
  .input('Contact', patientData.Contact)
  .input('Occupation', patientData.Occupation)
  .input('MonthlyIncome', patientData.MonthlyIncome)
  .input('Education', patientData.Education)
  .input('CancerHistory', patientData.CancerHistory)
  .input('Latitude', patientData.Latitude)
  .input('Longitude', patientData.Longitude)
  .input('Pulse', patientData.Pulse)
  .input('BP', patientData.BP)
  .input('Height', patientData.Height)
  .input('Weight', patientData.Weight)
  .input('SugarLvl', patientData.SugarLvl)
  .input('MedicalHistory', patientData.MedicalHistory)
  .input('FCancerHistory', patientData.FCancerHistory)
  .input('FamIncome', patientData.FamIncome)
  .input('TobaccoYears', patientData.TobaccoYears)
  .input('TobaccoMon', patientData.TobaccoMon)
  .input('TobaccoF', patientData.TobaccoF)
  .input('TobaccoT', patientData.TobaccoT)
  .input('TobaccoW', patientData.TobaccoW)
  .input('GutkaYears', patientData.GutkaYears)
  .input('GutkaMon', patientData.GutkaMon)
  .input('GutkaF', patientData.GutkaF)
  .input('GutkaT', patientData.GutkaT)
  .input('GutkaW', patientData.GutkaW)
  .input('BidiYears', patientData.BidiYears)
  .input('BidiMon', patientData.BidiMon)
  .input('BidiF', patientData.BidiF)
  .input('BidiT', patientData.BidiT)
  .input('BidiW', patientData.BidiW)
  .input('CigaretteYears', patientData.CigaretteYears)
  .input('CigaretteMon', patientData.CigaretteMon)
  .input('CigaretteF', patientData.CigaretteF)
  .input('CigaretteT', patientData.CigaretteT)
  .input('CigaretteW', patientData.CigaretteW)
  .input('BetelnutYears', patientData.BetelnutYears)
  .input('BetelnutMon', patientData.BetelnutMon)
  .input('BetelnutF', patientData.BetelnutF)
  .input('BetelnutT', patientData.BetelnutT)
  .input('BetelnutW', patientData.BetelnutW)
  .input('PaanMasalaYears', patientData.PaanMasalaYears)
  .input('PaanMasalaMon', patientData.PaanMasalaMon)
  .input('PaanMasalaF', patientData.PaanMasalaF)
  .input('PaanMasalaT', patientData.PaanMasalaT)
  .input('PaanMasalaW', patientData.PaanMasalaW)
  .input('AlcoholCommercialYears', patientData.AlcoholCommercialYears)
  .input('AlcoholCommercialMon', patientData.AlcoholCommercialMon)
  .input('AlcoholCommercialF', patientData.AlcoholCommercialF)
  .input('AlcoholCommercialT', patientData.AlcoholCommercialT)
  .input('AlcoholCommercialW', patientData.AlcoholCommercialW)
  .input('AlcoholHomeBrewedYears', patientData.AlcoholHomeBrewedYears)
  .input('AlcoholHomeBrewedMon', patientData.AlcoholHomeBrewedMon)
  .input('AlcoholHomeBrewedF', patientData.AlcoholHomeBrewedF)
  .input('AlcoholHomeBrewedT', patientData.AlcoholHomeBrewedT)
  .input('AlcoholHomeBrewedW', patientData.AlcoholHomeBrewedW)
  .input('AwareHarmeffectofTobbacco', patientData.AwareHarmeffectofTobbacco)
  .input('UndergoneCancerScreening', patientData.UndergoneCancerScreening)
  .input('TobaccoCausesCancer', patientData.TobaccoCausesCancer)
  .input('CancerIsCurable', patientData.CancerIsCurable)
  .input('OralCavity', patientData.OralCavity)
  .input('IfAbnormal', patientData.IfAbnormal)
  .input('OralHygiene', patientData.OralHygiene)
  .input('REFFHC', patientData.REFFHC)
  .input('OVEClinicalDiagnosis', patientData.OVEClinicalDiagnosis)
  .input('OVETreatment', patientData.OVETreatment)
  .input('OVEDoctor', patientData.OVEDoctor)
  .input('Skin', patientData.Skin)
  .input('Nipple', patientData.Nipple)
  .input('Size', patientData.Size)
  .input('LBreast', patientData.LBreast)
  .input('RBreast', patientData.RBreast)
  .input('CBERHC', patientData.CBERHC)
  .input('CBEInvestigation', patientData.CBEInvestigation)
  .input('CBEDoctor', patientData.CBEDoctor)
  .input('LMP', patientData.LMP)
  .input('ObstetricHis', patientData.ObstetricHis)
  .input('ChiefComplaints', patientData.ChiefComplaints)
  .input('AppearanceCervix', patientData.AppearanceCervix)
  .input('ExternalOS', patientData.ExternalOS)
  .input('NabothianCyst', patientData.NabothianCyst)
  .input('Polyp', patientData.Polyp)
  .input('VaginalWC', patientData.VaginalWC)
  .input('FindingsViaTest', patientData.FindingsViaTest)
  .input('CCSImpression', patientData.CCSImpression)
  .input('CCSRHC', patientData.CCSRHC)
  .input('NILM', patientData.NILM)
  .input('EpithermalCA', patientData.EpithermalCA)
  .input('SquamousCA', patientData.SquamousCA)
  .input('PAPComment', patientData.PAPComment)
  .input('GlanDuralCA', patientData.GlanDuralCA)
  .input('CCSInvestigation', patientData.CCSInvestigation)
  .input('CCSDoctor', patientData.CCSDoctor)
  .input('LTDorsum', patientData.LTDorsum)
  .input('RTDorsum', patientData.RTDorsum)
  .input('LTVentral', patientData.LTVentral)
  .input('RTVentral', patientData.RTVentral)
  .input('Date', patientData.Date)
  .input('Time', patientData.Time)
  .input('IPAddress', patientData.IPAddress)
  .input('PAPReport', patientData.PAPReport)
  .input('PPE_FLAG', patientData.PPE_FLAG)
  .input('OVE_FLAG', patientData.OVE_FLAG)
  .input('OBE_FLAG', patientData.OBE_FLAG)
  .input('CCE_FLAG', patientData.CCE_FLAG)
  .query(query);

      // Return the number of rows affected for each insertion
      return result.rowsAffected[0];
    });

    // Wait for all insertion promises to complete
    const results = await Promise.all(insertionPromises);

    // Return an array containing the number of rows affected for each insertion
    return results;
  } catch (error) {
    console.error('Error adding patients:', error);
    throw error;
  }
}

module.exports = {
  addPatients,
};
