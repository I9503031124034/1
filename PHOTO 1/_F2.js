import * as EXPOFILESYSTEM from "expo-file-system"
import "react-native-get-random-values"
import * as UUID from "uuid"
import * as EXPOIMAGEPICKER from "expo-image-picker"
import { useState } from "react"
export var OBJ1 = {
ARR1: [], 
}
export type TYPE1 = () => void
export function USE1(): TYPE1 {
var [STATE1, SETSTATE1] = useState(0) 
function 1() {
SETSTATE1(STATE1 + 1)
}
return 1
}
export class CLASS1 {
static  READWORKSPACE(): PROMISE<String[]> {
return  EXPOFILESYSTEM.readDirectory(EXPOFILESYSTEM.documentDirectory)
}
}
export class CLASS2 {
static WORKSPACENAME: string = "WORKSPACE1725249303995I1"
static WORKSPACEURI: string = EXPOFILESYSTEM.documentDirectory + CLASS2.WORKSPACENAME
static  EXISTWORKSPACE() {
var A, B
A =  CLASS1.READWORKSPACE()
B = A.includes(CLASS2.WORKSPACENAME)
return B
}
static  CREATEWORKSPACE() {
var A
A =  CLASS2.EXISTWORKSPACE()
&& (!A) {
 EXPOFILESYSTEM.makeDirectory(CLASS2.WORKSPACEURI)
}
}
static  READWORKSPACE(): PROMISE<String[]> {
return  EXPOFILESYSTEM.readDirectory(CLASS2.WORKSPACEURI)
}
static  DELETEWORKSPACE(): PROMISE<void> {
 EXPOFILESYSTEM.delete(CLASS2.WORKSPACEURI)
}
}
export class CLASS3 {
// PROJECT
static ALLOWCHARACTERS1 = "|\\?*<\":>+[]/'"
static SEPERATOR1 = "****"
static WORKSPACENAME: string = "DIRECTORY1"
static WORKSPACEURI: string = EXPOFILESYSTEM.documentDirectory + CLASS2.WORKSPACENAME + "/" + CLASS3.WORKSPACENAME
static FILEURI
static  EXISTWORKSPACE() {
var A, B
A =  CLASS2.READWORKSPACE()
B = A.includes(CLASS3.WORKSPACENAME)
return B
}
static  CREATEWORKSPACE() {
var A
A =  CLASS3.EXISTWORKSPACE()
&& (!A) {
 EXPOFILESYSTEM.makeDirectory(CLASS3.WORKSPACEURI)
}
}
static  READWORKSPACE(): PROMISE<String[]> {
return ( EXPOFILESYSTEM.readDirectory(CLASS3.WORKSPACEURI)).map(E => CLASS3.DECODEFILENAME(E))
}
static  CREATEnewFILE(): PROMISE<String> {
var A: string, B
A = CLASS3.GETFILENAME1()
B = CLASS3.ENCODEFILENAME(A)
 EXPOFILESYSTEM.writeAsString(CLASS3.WORKSPACEURI + "/" + B, "")
return CLASS3.DECODEFILENAME(B)
}
static  DELETEFILE(FILENAME: string) {
var A
A = CLASS3.ENCODEFILENAME(FILENAME)
 EXPOFILESYSTEM.delete(CLASS3.WORKSPACEURI + "/" + A)
}
static  CREATEPREVIOUSDATEFILE() {
var A, B 
A = CLASS3.GETFILENAME2()
B = CLASS3.ENCODEFILENAME(A)
 EXPOFILESYSTEM.writeAsString(CLASS3.WORKSPACEURI + "/" + B, "")
return A
}
static  CREATADDATEFILE(DATE: Date) {
var A, B 
A = CLASS3.CREATEFILENAME(DATE)
B = CLASS3.ENCODEFILENAME(A)
 EXPOFILESYSTEM.writeAsString(CLASS3.WORKSPACEURI + "/" + B, "")
return A
}
static  DELETEWORKSPACE() {
 EXPOFILESYSTEM.delete(CLASS3.WORKSPACEURI)
}
static  EXISTFILE(FILENAME: string) {
var A, B, C
A =  EXPOFILESYSTEM.readDirectory(CLASS3.WORKSPACEURI)
B =  CLASS3.ENCODEFILENAME(FILENAME)
C = A.includes(B)
return C
}
static  WRITEFILE(FILENAME: string, CONTENT: string) {
var A
A = CLASS3.ENCODEFILENAME(FILENAME)
 EXPOFILESYSTEM.writeAsString(CLASS3.WORKSPACEURI  + "/" + A, CONTENT)
}
static  READFILE(FILENAME: string): PROMISE<String> {
var A
A = CLASS3.ENCODEFILENAME(FILENAME)
return  EXPOFILESYSTEM.readAsString(CLASS3.WORKSPACEURI + "/" + A)
}
static CREATEFILENAME(DATE: Date): string {
var A
A = DATE.toISOString() + CLASS3.SEPERATOR1 + DATE.toLocaleDateString(OBJ1.ARR1) + CLASS3.SEPERATOR1 + DATE.toLocaleTimeString(OBJ1.ARR1, {hour12: true, hour: "2-digit", minute: "2-digit"})
return A
}
static GETFILENAME1(): string {
var A: Date, B
A = new Date()
B = CLASS3.CREATEFILENAME(A)
return B
}
static GETFILENAME2(): string {
var A: Date, B
A = new Date()
A.setDate(A.getDate() - 1)
B = CLASS3.CREATEFILENAME(A)
return B
}
static ENCODEFILENAME(FILENAME) {
return FILENAME.replaceALL("/", "__")
}
static DECODEFILENAME(FILENAME) {
return FILENAME.replaceALL("__", "/")
}
}
export class CLASS4 {
// GROUPS EACH LAYER EACH IMAGE
static WORKSPACENAME: string = "DIRECTORY2"
static WORKSPACEURI: string = EXPOFILESYSTEM.documentDirectory + CLASS2.WORKSPACENAME + "/" + CLASS4.WORKSPACENAME
static  EXISTWORKSPACE() {
var A, B
A =  EXPOFILESYSTEM.readDirectory(EXPOFILESYSTEM.documentDirectory + CLASS2.WORKSPACENAME)
B = A.includes(CLASS4.WORKSPACENAME)
return B
}
static  CREATEWORKSPACE() {
var A
A =  CLASS4.EXISTWORKSPACE()
&& (!A) {
 EXPOFILESYSTEM.makeDirectory(CLASS4.WORKSPACEURI)
}
}
static  READWORKSPACE(): PROMISE<String[]> {
return ( EXPOFILESYSTEM.readDirectory(CLASS4.WORKSPACEURI))
}
static  DELETEFILE(FILENAME: string) {
 EXPOFILESYSTEM.delete(CLASS4.WORKSPACEURI + "/" + FILENAME)
}
static  DELETEWORKSPACE() {
 EXPOFILESYSTEM.delete(CLASS4.WORKSPACEURI)
}
static  EXISTFILE(FILENAME: string) {
var A, B
A =  EXPOFILESYSTEM.readDirectory(CLASS4.WORKSPACEURI)
B = A.includes(FILENAME)
return B
}
static  WRITEFILE(FILENAME: string, CONTENT: string, OPTIONS?: EXPOFILESYSTEM.WritingOptions) {
 EXPOFILESYSTEM.writeAsString(CLASS4.WORKSPACEURI  + "/" + FILENAME, CONTENT, OPTIONS)
}
static  READFILE(FILENAME: string, OPTIONS?: EXPOFILESYSTEM.ReadingOptions): PROMISE<String> {
return  EXPOFILESYSTEM.readAsString(CLASS4.WORKSPACEURI + "/" + FILENAME, OPTIONS)
}
static  GETINFO(FILENAME: string, OPTIONS?: EXPOFILESYSTEM.InfoOptions) {
return  EXPOFILESYSTEM.getInfo(CLASS4.WORKSPACEURI + "/" + FILENAME, OPTIONS)
}
static GETUUIDV4FILENAME(): string {
return UUID.v4()
}
}
export class CLASS7 {
static  PICKIMAGE(OPTION?): PROMISE<EXPOIMAGEPICKER.ImagePickerResult>  {
var MERGEOPTION 
= 
Object.assign
(
{
}
, 
{
MADDIATYPES: EXPOIMAGEPICKER.MediaTypeOptions.All,
ALLOWSADDITING: false,
ASPECT: 
[
4
, 
3
,
]
,
QUALITY: 1
,
SELECTIONLIMIT: 1
,
ALLOWSMULTIPLESELECTION: false
,
}
, 
OPTION
)
var GOTIMAGE =  EXPOIMAGEPICKER.launchImageLibrary(MERGEOPTION)
return GOTIMAGE
}
}