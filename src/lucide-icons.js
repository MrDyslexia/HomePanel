import {
  Settings, X, Minus, Plus, Pencil, Menu, GripVertical, RotateCcw,
  Search, ChevronDown, ChevronUp, Check, CheckCircle, AlertTriangle,
  AlertCircle, Info, MoreVertical,
  Play, Pause, SkipForward, SkipBack, Volume2, Music,
  Wifi, WifiOff, Bell,
  Flame, Snowflake, RefreshCw, Wind, PowerOff,
  FileText, Power, Sun, Camera, Video,
  Lightbulb, LightbulbOff,
  ToggleRight, ToggleLeft,
  Thermometer, Droplets, Battery, Zap, Gauge, Activity,
  DoorOpen, DoorClosed, AppWindow, Square,
  Warehouse, Lock, LockOpen,
  PanelTopOpen, PanelTop,
  Home, Plane, Palette, Bot, ShieldAlert, Cpu,
  Timer, TimerOff,
  Code, ListFilter, Hash, MousePointerClick,
  Cloud, CloudRain, CloudSnow, CloudLightning, CloudFog, CloudDrizzle, CloudHail, Moon,
  HelpCircle, Speaker, VolumeX, Tv, Cog,
} from 'lucide';

// UI Controls
export const settingsPath = Settings;
export const closePath = X;
export const minimizePath = Minus;
export const addPath = Plus;
export const editPath = Pencil;
export const menuPath = Menu;
export const dragHandlePath = GripVertical;
export const refreshPath = RotateCcw;
export const searchPath = Search;
export const expandMorePath = ChevronDown;
export const expandLessPath = ChevronUp;
export const checkPath = Check;
export const checkCirclePath = CheckCircle;
export const warningPath = AlertTriangle;
export const errorPath = AlertCircle;
export const infoPath = Info;
export const moreVertPath = MoreVertical;

// Media Controls
export const playPath = Play;
export const pausePath = Pause;
export const skipNextPath = SkipForward;
export const skipPreviousPath = SkipBack;
export const volumeUpPath = Volume2;
export const musicNotePath = Music;

// Connection / Status
export const wifiPath = Wifi;
export const wifiOffPath = WifiOff;
export const bellPath = Bell;

// Climate modes
export const heatPath = Flame;
export const coolPath = Snowflake;
export const autoModePath = RefreshCw;
export const dryPath = Wind;
export const offModePath = PowerOff;

// Utility
export const fileDocumentPath = FileText;
export const powerPath = Power;
export const brightnessPath = Sun;
export const cameraPath = Camera;
export const videocamPath = Video;

// Entity: Light
export const lightbulbOnPath = Lightbulb;
export const lightbulbOffPath = LightbulbOff;
export const lightbulbDimPath = Lightbulb;

// Entity: Switch
export const switchOnPath = ToggleRight;
export const switchOffPath = ToggleLeft;

// Entity: Fan
export const fanOnPath = Wind;
export const fanOffPath = Wind;

// Entity: Sensors
export const temperaturePath = Thermometer;
export const humidityPath = Droplets;
export const batteryPath = Battery;
export const powerSensorPath = Zap;
export const pressurePath = Gauge;
export const illuminancePath = Sun;
export const genericSensorPath = Activity;

// Entity: Binary Sensors
export const motionOnPath = Activity;
export const motionOffPath = Activity;
export const doorOpenPath = DoorOpen;
export const doorClosedPath = DoorClosed;
export const windowOpenPath = AppWindow;
export const windowClosedPath = Square;
export const binarySensorOnPath = ToggleRight;
export const binarySensorOffPath = ToggleLeft;
export const smokePath = Wind;
export const moisturePath = Droplets;
export const garageOpenPath = Warehouse;
export const garageClosedPath = Warehouse;
export const lockOpen2Path = LockOpen;

// Entity: Climate
export const climatePath = Thermometer;

// Entity: Media Player
export const mediaPlayerPath = Speaker;
export const mediaPlayerOffPath = VolumeX;
export const tvPath = Tv;

// Entity: Camera
export const cctvPath = Camera;

// Entity: Lock
export const lockPath = Lock;
export const lockOpenPath = LockOpen;

// Entity: Cover / Blinds
export const coverOpenPath = PanelTopOpen;
export const coverClosedPath = PanelTop;

// Entity: Person / Tracker
export const homePresencePath = Home;
export const awayPath = Plane;

// Entity: Scene
export const scenePath = Palette;

// Entity: Automation
export const automationPath = Bot;

// Entity: Alarm
export const alarmPath = ShieldAlert;

// Entity: Vacuum
export const vacuumPath = Cpu;

// Entity: Timer
export const timerPath = Timer;
export const timerOffPath = TimerOff;

// Entity: Input Boolean
export const inputBoolOnPath = ToggleRight;
export const inputBoolOffPath = ToggleLeft;

// Entity: Script
export const scriptPath = Code;

// Entity: Input Select / Select
export const selectPath = ListFilter;

// Entity: Number / Input Number
export const numberPath = Hash;

// Entity: Button
export const buttonPath = MousePointerClick;

// Entity: Update
export const updatePath = RefreshCw;

// Weather
export const weatherDefaultPath = Cloud;
export const weatherSunnyPath = Sun;
export const weatherCloudyPath = Cloud;
export const weatherRainyPath = CloudRain;
export const weatherSnowyPath = CloudSnow;
export const weatherThunderstormPath = CloudLightning;
export const weatherFogPath = CloudFog;
export const weatherWindyPath = Wind;
export const weatherNightPath = Moon;
export const weatherSleethPath = CloudDrizzle;
export const weatherHailPath = CloudHail;

// Fallback
export const unknownPath = HelpCircle;
