import { provideHttpClientTesting } from '@angular/common/http/testing';
import {
  ComponentFixture,
  fakeAsync,
  TestBed,
  tick,
} from '@angular/core/testing';

import { OrchidService } from '../../services/orchid.service';
import { CameraViewerComponent } from './camera-viewer.component';

describe('CameraViewerComponent', () => {
  let component: CameraViewerComponent;
  let fixture: ComponentFixture<CameraViewerComponent>;
  let mockOrchidService: jasmine.SpyObj<OrchidService>;

  const mockCameras = [
    {
        "active": true,
        "capabilities": {
            "camera": {
                "DHCP": {
                    "capabilities": {
                        "Off": {
                            "HostName": {
                                "max": "63",
                                "type": "string"
                            },
                            "IPAddress": {
                                "type": "ip_address"
                            },
                            "NetworkGateway": {
                                "type": "ip_address"
                            },
                            "SubnetMask": {
                                "type": "ip_address"
                            }
                        },
                        "On": {
                            "IPAddress": {
                                "readOnly": "true",
                                "type": "ip_address"
                            }
                        }
                    },
                    "options": [
                        "On",
                        "Off"
                    ],
                    "type": "enum"
                },
                "NTP": {
                    "Mode": {
                        "capabilities": {
                            "manual": {
                                "Server": {
                                    "default": "pool.ntp.org",
                                    "type": "string"
                                }
                            }
                        },
                        "default": "disabled",
                        "options": [
                            "disabled",
                            "dhcp",
                            "manual"
                        ],
                        "type": "enum"
                    }
                },
                "PTZ": {
                    "maxPresets": "0",
                    "pan": "true",
                    "relativeFOV": "true",
                    "tilt": "true",
                    "zoom": "false"
                },
                "PossibleStreams": "40",
                "TimeZone": {
                    "DaylightSavings": {
                        "default": "false",
                        "options": [
                            "true",
                            "false"
                        ],
                        "type": "enum"
                    },
                    "PosixTZ": {
                        "default": "UTC0",
                        "type": "posix_tz_string"
                    }
                },
                "TransportProtocol": {
                    "default": "AUTO",
                    "options": [
                        "AUTO",
                        "UDP",
                        "UDP_MCAST",
                        "HTTP",
                        "TCP"
                    ],
                    "type": "enum"
                }
            },
            "stream": {
                "Metadata": {
                    "Mode": {
                        "capabilities": {
                            "On": {
                                "TopicFilter": {
                                    "capabilities": {
                                        "tns1:Device/HardwareFailure/PowerSupplyFailure/tnsaxis:PTZPowerFailure": {
                                            "MessageType": {
                                                "Data": [
                                                    {
                                                        "Name": "Failed",
                                                        "Type": "xsd:boolean"
                                                    }
                                                ],
                                                "Source": [
                                                    {
                                                        "Name": "Token",
                                                        "Type": "tt:ReferenceToken"
                                                    }
                                                ]
                                            }
                                        },
                                        "tns1:Device/Trigger/DigitalInput": {
                                            "MessageType": {
                                                "Data": [
                                                    {
                                                        "Name": "LogicalState",
                                                        "Type": "xsd:boolean"
                                                    }
                                                ],
                                                "Source": [
                                                    {
                                                        "Name": "InputToken",
                                                        "Type": "tt:ReferenceToken"
                                                    }
                                                ]
                                            }
                                        },
                                        "tns1:Device/Trigger/Relay": {
                                            "MessageType": {
                                                "Data": [
                                                    {
                                                        "Name": "LogicalState",
                                                        "Type": "tt:RelayLogicalState"
                                                    }
                                                ],
                                                "Source": [
                                                    {
                                                        "Name": "RelayToken",
                                                        "Type": "tt:ReferenceToken"
                                                    }
                                                ]
                                            }
                                        },
                                        "tns1:Device/tnsaxis:Casing/Open": {
                                            "MessageType": {
                                                "Data": [
                                                    {
                                                        "Name": "Open",
                                                        "Type": "xsd:boolean"
                                                    }
                                                ],
                                                "Source": [
                                                    {
                                                        "Name": "Name",
                                                        "Type": "xsd:string"
                                                    }
                                                ]
                                            }
                                        },
                                        "tns1:Device/tnsaxis:HardwareFailure/StorageFailure": {
                                            "MessageType": {
                                                "Data": [
                                                    {
                                                        "Name": "disruption",
                                                        "Type": "xsd:boolean"
                                                    }
                                                ],
                                                "Source": [
                                                    {
                                                        "Name": "disk_id",
                                                        "Type": "xsd:string"
                                                    }
                                                ]
                                            }
                                        },
                                        "tns1:Device/tnsaxis:IO/OutputPort": {
                                            "MessageType": {
                                                "Data": [
                                                    {
                                                        "Name": "state",
                                                        "Type": "xsd:boolean"
                                                    }
                                                ],
                                                "Source": [
                                                    {
                                                        "Name": "port",
                                                        "Type": "xsd:int"
                                                    }
                                                ]
                                            }
                                        },
                                        "tns1:Device/tnsaxis:IO/Port": {
                                            "MessageType": {
                                                "Data": [
                                                    {
                                                        "Name": "state",
                                                        "Type": "xsd:boolean"
                                                    }
                                                ],
                                                "Source": [
                                                    {
                                                        "Name": "port",
                                                        "Type": "xsd:int"
                                                    }
                                                ]
                                            }
                                        },
                                        "tns1:Device/tnsaxis:IO/SupervisedPort": {
                                            "MessageType": {
                                                "Data": [
                                                    {
                                                        "Name": "state",
                                                        "Type": "xsd:string"
                                                    },
                                                    {
                                                        "Name": "tampered",
                                                        "Type": "xsd:boolean"
                                                    }
                                                ],
                                                "Source": [
                                                    {
                                                        "Name": "port",
                                                        "Type": "xsd:int"
                                                    }
                                                ]
                                            }
                                        },
                                        "tns1:Device/tnsaxis:IO/VirtualInput": {
                                            "MessageType": {
                                                "Data": [
                                                    {
                                                        "Name": "active",
                                                        "Type": "xsd:boolean"
                                                    }
                                                ],
                                                "Source": [
                                                    {
                                                        "Name": "port",
                                                        "Type": "xsd:int"
                                                    }
                                                ]
                                            }
                                        },
                                        "tns1:Device/tnsaxis:IO/VirtualPort": {
                                            "MessageType": {
                                                "Data": [
                                                    {
                                                        "Name": "state",
                                                        "Type": "xsd:boolean"
                                                    }
                                                ],
                                                "Source": [
                                                    {
                                                        "Name": "port",
                                                        "Type": "xsd:int"
                                                    }
                                                ]
                                            }
                                        },
                                        "tns1:Device/tnsaxis:Light/Status": {
                                            "MessageType": {
                                                "Data": [
                                                    {
                                                        "Name": "state",
                                                        "Type": "xsd:string"
                                                    }
                                                ],
                                                "Source": [
                                                    {
                                                        "Name": "id",
                                                        "Type": "xsd:int"
                                                    }
                                                ]
                                            }
                                        },
                                        "tns1:Device/tnsaxis:MQTT/ClientStatus": {
                                            "MessageType": {
                                                "Data": [
                                                    {
                                                        "Name": "connected",
                                                        "Type": "xsd:boolean"
                                                    },
                                                    {
                                                        "Name": "active",
                                                        "Type": "xsd:boolean"
                                                    }
                                                ]
                                            }
                                        },
                                        "tns1:Device/tnsaxis:Network/AddressAdded": {
                                            "MessageType": {
                                                "Data": [
                                                    {
                                                        "Name": "origin",
                                                        "Type": "xsd:string"
                                                    },
                                                    {
                                                        "Name": "address",
                                                        "Type": "xsd:string"
                                                    }
                                                ],
                                                "Source": [
                                                    {
                                                        "Name": "interface",
                                                        "Type": "xsd:string"
                                                    }
                                                ]
                                            }
                                        },
                                        "tns1:Device/tnsaxis:Network/AddressRemoved": {
                                            "MessageType": {
                                                "Data": [
                                                    {
                                                        "Name": "origin",
                                                        "Type": "xsd:string"
                                                    },
                                                    {
                                                        "Name": "address",
                                                        "Type": "xsd:string"
                                                    }
                                                ],
                                                "Source": [
                                                    {
                                                        "Name": "interface",
                                                        "Type": "xsd:string"
                                                    }
                                                ]
                                            }
                                        },
                                        "tns1:Device/tnsaxis:Network/BlockedIP": {
                                            "MessageType": {
                                                "Data": [
                                                    {
                                                        "Name": "address",
                                                        "Type": "xsd:string"
                                                    }
                                                ]
                                            }
                                        },
                                        "tns1:Device/tnsaxis:Network/Lost": {
                                            "MessageType": {
                                                "Data": [
                                                    {
                                                        "Name": "lost",
                                                        "Type": "xsd:boolean"
                                                    }
                                                ],
                                                "Source": [
                                                    {
                                                        "Name": "interface",
                                                        "Type": "xsd:string"
                                                    }
                                                ]
                                            }
                                        },
                                        "tns1:Device/tnsaxis:RingPowerLimitExceeded": {
                                            "MessageType": {
                                                "Data": [
                                                    {
                                                        "Name": "limit_exceeded",
                                                        "Type": "xsd:boolean"
                                                    }
                                                ],
                                                "Source": [
                                                    {
                                                        "Name": "input",
                                                        "Type": "xsd:int"
                                                    }
                                                ]
                                            }
                                        },
                                        "tns1:Device/tnsaxis:Sensor/PIR": {
                                            "MessageType": {
                                                "Data": [
                                                    {
                                                        "Name": "state",
                                                        "Type": "xsd:boolean"
                                                    }
                                                ],
                                                "Source": [
                                                    {
                                                        "Name": "sensor",
                                                        "Type": "xsd:int"
                                                    }
                                                ]
                                            }
                                        },
                                        "tns1:Device/tnsaxis:Status/SystemReady": {
                                            "MessageType": {
                                                "Data": [
                                                    {
                                                        "Name": "ready",
                                                        "Type": "xsd:boolean"
                                                    }
                                                ]
                                            }
                                        },
                                        "tns1:Device/tnsaxis:Status/Temperature/Above": {
                                            "MessageType": {
                                                "Data": [
                                                    {
                                                        "Name": "sensor_level",
                                                        "Type": "xsd:boolean"
                                                    }
                                                ]
                                            }
                                        },
                                        "tns1:Device/tnsaxis:Status/Temperature/Above_or_below": {
                                            "MessageType": {
                                                "Data": [
                                                    {
                                                        "Name": "sensor_level",
                                                        "Type": "xsd:boolean"
                                                    }
                                                ]
                                            }
                                        },
                                        "tns1:Device/tnsaxis:Status/Temperature/Below": {
                                            "MessageType": {
                                                "Data": [
                                                    {
                                                        "Name": "sensor_level",
                                                        "Type": "xsd:boolean"
                                                    }
                                                ]
                                            }
                                        },
                                        "tns1:Device/tnsaxis:Status/Temperature/Inside": {
                                            "MessageType": {
                                                "Data": [
                                                    {
                                                        "Name": "sensor_level",
                                                        "Type": "xsd:boolean"
                                                    }
                                                ]
                                            }
                                        },
                                        "tns1:Device/tnsaxis:SystemMessage/ActionFailed": {
                                            "MessageType": {
                                                "Data": [
                                                    {
                                                        "Name": "description",
                                                        "Type": "xsd:string"
                                                    }
                                                ]
                                            }
                                        },
                                        "tns1:LightControl/tnsaxis:LightStatusChanged/Status": {
                                            "MessageType": {
                                                "Data": [
                                                    {
                                                        "Name": "state",
                                                        "Type": "xsd:string"
                                                    }
                                                ]
                                            }
                                        },
                                        "tns1:Media/ConfigurationChanged": {
                                            "MessageType": {
                                                "Source": [
                                                    {
                                                        "Name": "Type",
                                                        "Type": "xsd:string"
                                                    },
                                                    {
                                                        "Name": "Token",
                                                        "Type": "tt:ReferenceToken"
                                                    }
                                                ]
                                            }
                                        },
                                        "tns1:Media/ProfileChanged": {
                                            "MessageType": {
                                                "Source": [
                                                    {
                                                        "Name": "Token",
                                                        "Type": "tt:ReferenceToken"
                                                    }
                                                ]
                                            }
                                        },
                                        "tns1:PTZController/tnsaxis:ControlQueue": {
                                            "MessageType": {
                                                "Data": [
                                                    {
                                                        "Name": "queue_owner",
                                                        "Type": "xsd:string"
                                                    }
                                                ],
                                                "Source": [
                                                    {
                                                        "Name": "PTZConfigurationToken",
                                                        "Type": "xsd:int"
                                                    }
                                                ]
                                            }
                                        },
                                        "tns1:PTZController/tnsaxis:Move/Channel_1": {
                                            "MessageType": {
                                                "Data": [
                                                    {
                                                        "Name": "is_moving",
                                                        "Type": "xsd:boolean"
                                                    }
                                                ],
                                                "Source": [
                                                    {
                                                        "Name": "PTZConfigurationToken",
                                                        "Type": "xsd:int"
                                                    }
                                                ]
                                            }
                                        },
                                        "tns1:PTZController/tnsaxis:Move/Channel_10": {
                                            "MessageType": {
                                                "Data": [
                                                    {
                                                        "Name": "is_moving",
                                                        "Type": "xsd:boolean"
                                                    }
                                                ],
                                                "Source": [
                                                    {
                                                        "Name": "PTZConfigurationToken",
                                                        "Type": "xsd:int"
                                                    }
                                                ]
                                            }
                                        },
                                        "tns1:PTZController/tnsaxis:Move/Channel_11": {
                                            "MessageType": {
                                                "Data": [
                                                    {
                                                        "Name": "is_moving",
                                                        "Type": "xsd:boolean"
                                                    }
                                                ],
                                                "Source": [
                                                    {
                                                        "Name": "PTZConfigurationToken",
                                                        "Type": "xsd:int"
                                                    }
                                                ]
                                            }
                                        },
                                        "tns1:PTZController/tnsaxis:Move/Channel_12": {
                                            "MessageType": {
                                                "Data": [
                                                    {
                                                        "Name": "is_moving",
                                                        "Type": "xsd:boolean"
                                                    }
                                                ],
                                                "Source": [
                                                    {
                                                        "Name": "PTZConfigurationToken",
                                                        "Type": "xsd:int"
                                                    }
                                                ]
                                            }
                                        },
                                        "tns1:PTZController/tnsaxis:Move/Channel_2": {
                                            "MessageType": {
                                                "Data": [
                                                    {
                                                        "Name": "is_moving",
                                                        "Type": "xsd:boolean"
                                                    }
                                                ],
                                                "Source": [
                                                    {
                                                        "Name": "PTZConfigurationToken",
                                                        "Type": "xsd:int"
                                                    }
                                                ]
                                            }
                                        },
                                        "tns1:PTZController/tnsaxis:Move/Channel_3": {
                                            "MessageType": {
                                                "Data": [
                                                    {
                                                        "Name": "is_moving",
                                                        "Type": "xsd:boolean"
                                                    }
                                                ],
                                                "Source": [
                                                    {
                                                        "Name": "PTZConfigurationToken",
                                                        "Type": "xsd:int"
                                                    }
                                                ]
                                            }
                                        },
                                        "tns1:PTZController/tnsaxis:Move/Channel_4": {
                                            "MessageType": {
                                                "Data": [
                                                    {
                                                        "Name": "is_moving",
                                                        "Type": "xsd:boolean"
                                                    }
                                                ],
                                                "Source": [
                                                    {
                                                        "Name": "PTZConfigurationToken",
                                                        "Type": "xsd:int"
                                                    }
                                                ]
                                            }
                                        },
                                        "tns1:PTZController/tnsaxis:Move/Channel_5": {
                                            "MessageType": {
                                                "Data": [
                                                    {
                                                        "Name": "is_moving",
                                                        "Type": "xsd:boolean"
                                                    }
                                                ],
                                                "Source": [
                                                    {
                                                        "Name": "PTZConfigurationToken",
                                                        "Type": "xsd:int"
                                                    }
                                                ]
                                            }
                                        },
                                        "tns1:PTZController/tnsaxis:Move/Channel_6": {
                                            "MessageType": {
                                                "Data": [
                                                    {
                                                        "Name": "is_moving",
                                                        "Type": "xsd:boolean"
                                                    }
                                                ],
                                                "Source": [
                                                    {
                                                        "Name": "PTZConfigurationToken",
                                                        "Type": "xsd:int"
                                                    }
                                                ]
                                            }
                                        },
                                        "tns1:PTZController/tnsaxis:Move/Channel_7": {
                                            "MessageType": {
                                                "Data": [
                                                    {
                                                        "Name": "is_moving",
                                                        "Type": "xsd:boolean"
                                                    }
                                                ],
                                                "Source": [
                                                    {
                                                        "Name": "PTZConfigurationToken",
                                                        "Type": "xsd:int"
                                                    }
                                                ]
                                            }
                                        },
                                        "tns1:PTZController/tnsaxis:Move/Channel_8": {
                                            "MessageType": {
                                                "Data": [
                                                    {
                                                        "Name": "is_moving",
                                                        "Type": "xsd:boolean"
                                                    }
                                                ],
                                                "Source": [
                                                    {
                                                        "Name": "PTZConfigurationToken",
                                                        "Type": "xsd:int"
                                                    }
                                                ]
                                            }
                                        },
                                        "tns1:PTZController/tnsaxis:Move/Channel_9": {
                                            "MessageType": {
                                                "Data": [
                                                    {
                                                        "Name": "is_moving",
                                                        "Type": "xsd:boolean"
                                                    }
                                                ],
                                                "Source": [
                                                    {
                                                        "Name": "PTZConfigurationToken",
                                                        "Type": "xsd:int"
                                                    }
                                                ]
                                            }
                                        },
                                        "tns1:PTZController/tnsaxis:PTZError": {
                                            "MessageType": {
                                                "Data": [
                                                    {
                                                        "Name": "ptz_error",
                                                        "Type": "xsd:string"
                                                    }
                                                ],
                                                "Source": [
                                                    {
                                                        "Name": "channel",
                                                        "Type": "xsd:int"
                                                    }
                                                ]
                                            }
                                        },
                                        "tns1:PTZController/tnsaxis:PTZPresets/Channel_1": {
                                            "MessageType": {
                                                "Data": [
                                                    {
                                                        "Name": "on_preset",
                                                        "Type": "xsd:boolean"
                                                    }
                                                ],
                                                "Source": [
                                                    {
                                                        "Name": "PresetToken",
                                                        "Type": "xsd:int"
                                                    }
                                                ]
                                            }
                                        },
                                        "tns1:PTZController/tnsaxis:PTZPresets/Channel_10": {
                                            "MessageType": {
                                                "Data": [
                                                    {
                                                        "Name": "on_preset",
                                                        "Type": "xsd:boolean"
                                                    }
                                                ],
                                                "Source": [
                                                    {
                                                        "Name": "PresetToken",
                                                        "Type": "xsd:int"
                                                    }
                                                ]
                                            }
                                        },
                                        "tns1:PTZController/tnsaxis:PTZPresets/Channel_11": {
                                            "MessageType": {
                                                "Data": [
                                                    {
                                                        "Name": "on_preset",
                                                        "Type": "xsd:boolean"
                                                    }
                                                ],
                                                "Source": [
                                                    {
                                                        "Name": "PresetToken",
                                                        "Type": "xsd:int"
                                                    }
                                                ]
                                            }
                                        },
                                        "tns1:PTZController/tnsaxis:PTZPresets/Channel_12": {
                                            "MessageType": {
                                                "Data": [
                                                    {
                                                        "Name": "on_preset",
                                                        "Type": "xsd:boolean"
                                                    }
                                                ],
                                                "Source": [
                                                    {
                                                        "Name": "PresetToken",
                                                        "Type": "xsd:int"
                                                    }
                                                ]
                                            }
                                        },
                                        "tns1:PTZController/tnsaxis:PTZPresets/Channel_2": {
                                            "MessageType": {
                                                "Data": [
                                                    {
                                                        "Name": "on_preset",
                                                        "Type": "xsd:boolean"
                                                    }
                                                ],
                                                "Source": [
                                                    {
                                                        "Name": "PresetToken",
                                                        "Type": "xsd:int"
                                                    }
                                                ]
                                            }
                                        },
                                        "tns1:PTZController/tnsaxis:PTZPresets/Channel_3": {
                                            "MessageType": {
                                                "Data": [
                                                    {
                                                        "Name": "on_preset",
                                                        "Type": "xsd:boolean"
                                                    }
                                                ],
                                                "Source": [
                                                    {
                                                        "Name": "PresetToken",
                                                        "Type": "xsd:int"
                                                    }
                                                ]
                                            }
                                        },
                                        "tns1:PTZController/tnsaxis:PTZPresets/Channel_4": {
                                            "MessageType": {
                                                "Data": [
                                                    {
                                                        "Name": "on_preset",
                                                        "Type": "xsd:boolean"
                                                    }
                                                ],
                                                "Source": [
                                                    {
                                                        "Name": "PresetToken",
                                                        "Type": "xsd:int"
                                                    }
                                                ]
                                            }
                                        },
                                        "tns1:PTZController/tnsaxis:PTZPresets/Channel_5": {
                                            "MessageType": {
                                                "Data": [
                                                    {
                                                        "Name": "on_preset",
                                                        "Type": "xsd:boolean"
                                                    }
                                                ],
                                                "Source": [
                                                    {
                                                        "Name": "PresetToken",
                                                        "Type": "xsd:int"
                                                    }
                                                ]
                                            }
                                        },
                                        "tns1:PTZController/tnsaxis:PTZPresets/Channel_6": {
                                            "MessageType": {
                                                "Data": [
                                                    {
                                                        "Name": "on_preset",
                                                        "Type": "xsd:boolean"
                                                    }
                                                ],
                                                "Source": [
                                                    {
                                                        "Name": "PresetToken",
                                                        "Type": "xsd:int"
                                                    }
                                                ]
                                            }
                                        },
                                        "tns1:PTZController/tnsaxis:PTZPresets/Channel_7": {
                                            "MessageType": {
                                                "Data": [
                                                    {
                                                        "Name": "on_preset",
                                                        "Type": "xsd:boolean"
                                                    }
                                                ],
                                                "Source": [
                                                    {
                                                        "Name": "PresetToken",
                                                        "Type": "xsd:int"
                                                    }
                                                ]
                                            }
                                        },
                                        "tns1:PTZController/tnsaxis:PTZPresets/Channel_8": {
                                            "MessageType": {
                                                "Data": [
                                                    {
                                                        "Name": "on_preset",
                                                        "Type": "xsd:boolean"
                                                    }
                                                ],
                                                "Source": [
                                                    {
                                                        "Name": "PresetToken",
                                                        "Type": "xsd:int"
                                                    }
                                                ]
                                            }
                                        },
                                        "tns1:PTZController/tnsaxis:PTZPresets/Channel_9": {
                                            "MessageType": {
                                                "Data": [
                                                    {
                                                        "Name": "on_preset",
                                                        "Type": "xsd:boolean"
                                                    }
                                                ],
                                                "Source": [
                                                    {
                                                        "Name": "PresetToken",
                                                        "Type": "xsd:int"
                                                    }
                                                ]
                                            }
                                        },
                                        "tns1:PTZController/tnsaxis:PTZReady": {
                                            "MessageType": {
                                                "Data": [
                                                    {
                                                        "Name": "ready",
                                                        "Type": "xsd:boolean"
                                                    }
                                                ],
                                                "Source": [
                                                    {
                                                        "Name": "channel",
                                                        "Type": "xsd:int"
                                                    }
                                                ]
                                            }
                                        },
                                        "tns1:RecordingConfig/CreateRecording": {
                                            "MessageType": {
                                                "Source": [
                                                    {
                                                        "Name": "RecordingToken",
                                                        "Type": "tt:RecordingReference"
                                                    }
                                                ]
                                            }
                                        },
                                        "tns1:RecordingConfig/CreateTrack": {
                                            "MessageType": {
                                                "Source": [
                                                    {
                                                        "Name": "TrackToken",
                                                        "Type": "tt:TrackReference"
                                                    },
                                                    {
                                                        "Name": "RecordingToken",
                                                        "Type": "tt:RecordingReference"
                                                    }
                                                ]
                                            }
                                        },
                                        "tns1:RecordingConfig/DeleteRecording": {
                                            "MessageType": {
                                                "Source": [
                                                    {
                                                        "Name": "RecordingToken",
                                                        "Type": "tt:RecordingReference"
                                                    }
                                                ]
                                            }
                                        },
                                        "tns1:RecordingConfig/DeleteTrack": {
                                            "MessageType": {
                                                "Source": [
                                                    {
                                                        "Name": "TrackToken",
                                                        "Type": "tt:TrackReference"
                                                    },
                                                    {
                                                        "Name": "RecordingToken",
                                                        "Type": "tt:RecordingReference"
                                                    }
                                                ]
                                            }
                                        },
                                        "tns1:RecordingConfig/JobState": {
                                            "MessageType": {
                                                "Data": [
                                                    {
                                                        "Name": "State",
                                                        "Type": "xsd:string"
                                                    },
                                                    {
                                                        "Name": "Information",
                                                        "Type": "tt:RecordingJobStateInformation"
                                                    }
                                                ],
                                                "Source": [
                                                    {
                                                        "Name": "RecordingJobToken",
                                                        "Type": "tt:RecordingJobReference"
                                                    }
                                                ]
                                            }
                                        },
                                        "tns1:RecordingConfig/RecordingConfiguration": {
                                            "MessageType": {
                                                "Data": [
                                                    {
                                                        "Name": "Configuration",
                                                        "Type": "tt:RecordingConfiguration"
                                                    }
                                                ],
                                                "Source": [
                                                    {
                                                        "Name": "RecordingToken",
                                                        "Type": "tt:RecordingReference"
                                                    }
                                                ]
                                            }
                                        },
                                        "tns1:RecordingConfig/RecordingJobConfiguration": {
                                            "MessageType": {
                                                "Data": [
                                                    {
                                                        "Name": "Configuration",
                                                        "Type": "tt:RecordingJobConfiguration"
                                                    }
                                                ],
                                                "Source": [
                                                    {
                                                        "Name": "RecordingJobToken",
                                                        "Type": "tt:RecordingJobReference"
                                                    }
                                                ]
                                            }
                                        },
                                        "tns1:RecordingConfig/TrackConfiguration": {
                                            "MessageType": {
                                                "Data": [
                                                    {
                                                        "Name": "Configuration",
                                                        "Type": "tt:TrackConfiguration"
                                                    }
                                                ],
                                                "Source": [
                                                    {
                                                        "Name": "TrackToken",
                                                        "Type": "tt:TrackReference"
                                                    },
                                                    {
                                                        "Name": "RecordingToken",
                                                        "Type": "tt:RecordingReference"
                                                    }
                                                ]
                                            }
                                        },
                                        "tns1:UserAlarm/tnsaxis:Recurring/Interval": {
                                            "MessageType": {
                                                "Data": [
                                                    {
                                                        "Name": "active",
                                                        "Type": "xsd:boolean"
                                                    }
                                                ],
                                                "Source": [
                                                    {
                                                        "Name": "id",
                                                        "Type": "xsd:string"
                                                    }
                                                ]
                                            }
                                        },
                                        "tns1:VideoSource/GlobalSceneChange/ImagingService": {
                                            "MessageType": {
                                                "Data": [
                                                    {
                                                        "Name": "State",
                                                        "Type": "xsd:boolean"
                                                    }
                                                ],
                                                "Source": [
                                                    {
                                                        "Name": "Source",
                                                        "Type": "tt:ReferenceToken"
                                                    }
                                                ]
                                            }
                                        },
                                        "tns1:VideoSource/tnsaxis:ABR": {
                                            "MessageType": {
                                                "Data": [
                                                    {
                                                        "Name": "abr_error",
                                                        "Type": "xsd:boolean"
                                                    }
                                                ],
                                                "Source": [
                                                    {
                                                        "Name": "VideoSourceConfigurationToken",
                                                        "Type": "xsd:int"
                                                    }
                                                ]
                                            }
                                        },
                                        "tns1:VideoSource/tnsaxis:DayNightVision": {
                                            "MessageType": {
                                                "Data": [
                                                    {
                                                        "Name": "day",
                                                        "Type": "xsd:boolean"
                                                    }
                                                ],
                                                "Source": [
                                                    {
                                                        "Name": "VideoSourceConfigurationToken",
                                                        "Type": "xsd:int"
                                                    }
                                                ]
                                            }
                                        },
                                        "tns1:VideoSource/tnsaxis:LiveStreamAccessed": {
                                            "MessageType": {
                                                "Data": [
                                                    {
                                                        "Name": "accessed",
                                                        "Type": "xsd:boolean"
                                                    }
                                                ]
                                            }
                                        },
                                        "tns1:VideoSource/tnsaxis:Tampering": {
                                            "MessageType": {
                                                "Data": [
                                                    {
                                                        "Name": "tampering",
                                                        "Type": "xsd:int"
                                                    }
                                                ],
                                                "Source": [
                                                    {
                                                        "Name": "channel",
                                                        "Type": "xsd:int"
                                                    }
                                                ]
                                            }
                                        },
                                        "tnsaxis:AudioControl/DigitalSignalStatus": {
                                            "MessageType": {
                                                "Data": [
                                                    {
                                                        "Name": "signal_status",
                                                        "Type": "xsd:string"
                                                    }
                                                ],
                                                "Source": [
                                                    {
                                                        "Name": "input",
                                                        "Type": "xsd:int"
                                                    }
                                                ]
                                            }
                                        },
                                        "tnsaxis:AudioControl/DigitalSignalStatusInvalid": {
                                            "MessageType": {
                                                "Data": [
                                                    {
                                                        "Name": "signal_status_invalid",
                                                        "Type": "xsd:boolean"
                                                    }
                                                ],
                                                "Source": [
                                                    {
                                                        "Name": "input",
                                                        "Type": "xsd:int"
                                                    }
                                                ]
                                            }
                                        },
                                        "tnsaxis:AudioControl/DigitalSignalStatusMetadata": {
                                            "MessageType": {
                                                "Data": [
                                                    {
                                                        "Name": "audio_metadata",
                                                        "Type": "xsd:boolean"
                                                    }
                                                ],
                                                "Source": [
                                                    {
                                                        "Name": "input",
                                                        "Type": "xsd:int"
                                                    }
                                                ]
                                            }
                                        },
                                        "tnsaxis:AudioControl/DigitalSignalStatusNoSignal": {
                                            "MessageType": {
                                                "Data": [
                                                    {
                                                        "Name": "signal_status_no_signal",
                                                        "Type": "xsd:boolean"
                                                    }
                                                ],
                                                "Source": [
                                                    {
                                                        "Name": "input",
                                                        "Type": "xsd:int"
                                                    }
                                                ]
                                            }
                                        },
                                        "tnsaxis:AudioControl/DigitalSignalStatusOK": {
                                            "MessageType": {
                                                "Data": [
                                                    {
                                                        "Name": "signal_status_ok",
                                                        "Type": "xsd:boolean"
                                                    }
                                                ],
                                                "Source": [
                                                    {
                                                        "Name": "input",
                                                        "Type": "xsd:int"
                                                    }
                                                ]
                                            }
                                        },
                                        "tnsaxis:MQTT/Message/Stateless": {
                                            "MessageType": {
                                                "Data": [
                                                    {
                                                        "Name": "mqtt-payload",
                                                        "Type": "xsd:string"
                                                    }
                                                ],
                                                "Source": [
                                                    {
                                                        "Name": "mqtt-topic",
                                                        "Type": "xsd:string"
                                                    },
                                                    {
                                                        "Name": "device-prefix",
                                                        "Type": "xsd:boolean"
                                                    }
                                                ]
                                            }
                                        },
                                        "tnsaxis:Storage/Alert": {
                                            "MessageType": {
                                                "Data": [
                                                    {
                                                        "Name": "overall_health",
                                                        "Type": "xsd:int"
                                                    },
                                                    {
                                                        "Name": "alert",
                                                        "Type": "xsd:boolean"
                                                    },
                                                    {
                                                        "Name": "wear",
                                                        "Type": "xsd:int"
                                                    },
                                                    {
                                                        "Name": "temperature",
                                                        "Type": "xsd:int"
                                                    }
                                                ],
                                                "Source": [
                                                    {
                                                        "Name": "disk_id",
                                                        "Type": "xsd:string"
                                                    }
                                                ]
                                            }
                                        },
                                        "tnsaxis:Storage/Disruption": {
                                            "MessageType": {
                                                "Data": [
                                                    {
                                                        "Name": "disruption",
                                                        "Type": "xsd:boolean"
                                                    }
                                                ],
                                                "Source": [
                                                    {
                                                        "Name": "disk_id",
                                                        "Type": "xsd:string"
                                                    }
                                                ]
                                            }
                                        },
                                        "tnsaxis:Storage/Recording": {
                                            "MessageType": {
                                                "Data": [
                                                    {
                                                        "Name": "recording",
                                                        "Type": "xsd:boolean"
                                                    }
                                                ]
                                            }
                                        }
                                    },
                                    "default": [],
                                    "options": [
                                        "tns1:Device/HardwareFailure/PowerSupplyFailure/tnsaxis:PTZPowerFailure",
                                        "tns1:Device/Trigger/DigitalInput",
                                        "tns1:Device/Trigger/Relay",
                                        "tns1:Device/tnsaxis:Casing/Open",
                                        "tns1:Device/tnsaxis:HardwareFailure/StorageFailure",
                                        "tns1:Device/tnsaxis:IO/OutputPort",
                                        "tns1:Device/tnsaxis:IO/Port",
                                        "tns1:Device/tnsaxis:IO/SupervisedPort",
                                        "tns1:Device/tnsaxis:IO/VirtualInput",
                                        "tns1:Device/tnsaxis:IO/VirtualPort",
                                        "tns1:Device/tnsaxis:Light/Status",
                                        "tns1:Device/tnsaxis:MQTT/ClientStatus",
                                        "tns1:Device/tnsaxis:Network/AddressAdded",
                                        "tns1:Device/tnsaxis:Network/AddressRemoved",
                                        "tns1:Device/tnsaxis:Network/BlockedIP",
                                        "tns1:Device/tnsaxis:Network/Lost",
                                        "tns1:Device/tnsaxis:RingPowerLimitExceeded",
                                        "tns1:Device/tnsaxis:Sensor/PIR",
                                        "tns1:Device/tnsaxis:Status/SystemReady",
                                        "tns1:Device/tnsaxis:Status/Temperature/Above",
                                        "tns1:Device/tnsaxis:Status/Temperature/Above_or_below",
                                        "tns1:Device/tnsaxis:Status/Temperature/Below",
                                        "tns1:Device/tnsaxis:Status/Temperature/Inside",
                                        "tns1:Device/tnsaxis:SystemMessage/ActionFailed",
                                        "tns1:LightControl/tnsaxis:LightStatusChanged/Status",
                                        "tns1:Media/ConfigurationChanged",
                                        "tns1:Media/ProfileChanged",
                                        "tns1:PTZController/tnsaxis:ControlQueue",
                                        "tns1:PTZController/tnsaxis:Move/Channel_1",
                                        "tns1:PTZController/tnsaxis:Move/Channel_10",
                                        "tns1:PTZController/tnsaxis:Move/Channel_11",
                                        "tns1:PTZController/tnsaxis:Move/Channel_12",
                                        "tns1:PTZController/tnsaxis:Move/Channel_2",
                                        "tns1:PTZController/tnsaxis:Move/Channel_3",
                                        "tns1:PTZController/tnsaxis:Move/Channel_4",
                                        "tns1:PTZController/tnsaxis:Move/Channel_5",
                                        "tns1:PTZController/tnsaxis:Move/Channel_6",
                                        "tns1:PTZController/tnsaxis:Move/Channel_7",
                                        "tns1:PTZController/tnsaxis:Move/Channel_8",
                                        "tns1:PTZController/tnsaxis:Move/Channel_9",
                                        "tns1:PTZController/tnsaxis:PTZError",
                                        "tns1:PTZController/tnsaxis:PTZPresets/Channel_1",
                                        "tns1:PTZController/tnsaxis:PTZPresets/Channel_10",
                                        "tns1:PTZController/tnsaxis:PTZPresets/Channel_11",
                                        "tns1:PTZController/tnsaxis:PTZPresets/Channel_12",
                                        "tns1:PTZController/tnsaxis:PTZPresets/Channel_2",
                                        "tns1:PTZController/tnsaxis:PTZPresets/Channel_3",
                                        "tns1:PTZController/tnsaxis:PTZPresets/Channel_4",
                                        "tns1:PTZController/tnsaxis:PTZPresets/Channel_5",
                                        "tns1:PTZController/tnsaxis:PTZPresets/Channel_6",
                                        "tns1:PTZController/tnsaxis:PTZPresets/Channel_7",
                                        "tns1:PTZController/tnsaxis:PTZPresets/Channel_8",
                                        "tns1:PTZController/tnsaxis:PTZPresets/Channel_9",
                                        "tns1:PTZController/tnsaxis:PTZReady",
                                        "tns1:RecordingConfig/CreateRecording",
                                        "tns1:RecordingConfig/CreateTrack",
                                        "tns1:RecordingConfig/DeleteRecording",
                                        "tns1:RecordingConfig/DeleteTrack",
                                        "tns1:RecordingConfig/JobState",
                                        "tns1:RecordingConfig/RecordingConfiguration",
                                        "tns1:RecordingConfig/RecordingJobConfiguration",
                                        "tns1:RecordingConfig/TrackConfiguration",
                                        "tns1:UserAlarm/tnsaxis:Recurring/Interval",
                                        "tns1:VideoSource/GlobalSceneChange/ImagingService",
                                        "tns1:VideoSource/tnsaxis:ABR",
                                        "tns1:VideoSource/tnsaxis:DayNightVision",
                                        "tns1:VideoSource/tnsaxis:LiveStreamAccessed",
                                        "tns1:VideoSource/tnsaxis:Tampering",
                                        "tnsaxis:AudioControl/DigitalSignalStatus",
                                        "tnsaxis:AudioControl/DigitalSignalStatusInvalid",
                                        "tnsaxis:AudioControl/DigitalSignalStatusMetadata",
                                        "tnsaxis:AudioControl/DigitalSignalStatusNoSignal",
                                        "tnsaxis:AudioControl/DigitalSignalStatusOK",
                                        "tnsaxis:MQTT/Message/Stateless",
                                        "tnsaxis:Storage/Alert",
                                        "tnsaxis:Storage/Disruption",
                                        "tnsaxis:Storage/Recording"
                                    ],
                                    "type": "multiselect"
                                }
                            }
                        },
                        "default": "Off",
                        "options": [
                            "Off",
                            "On"
                        ],
                        "type": "enum"
                    }
                },
                "Video": {
                    "Encoder": {
                        "capabilities": {
                            "H264": {
                                "BitRate": {
                                    "default": "-1073741824",
                                    "max": "2147483647",
                                    "min": "1",
                                    "type": "int"
                                },
                                "EncoderInterval": {
                                    "default": "1",
                                    "max": "1",
                                    "min": "1",
                                    "type": "int"
                                },
                                "FrameRate": {
                                    "default": "30",
                                    "max": "30",
                                    "min": "1",
                                    "type": "int"
                                },
                                "GOVLength": {
                                    "default": "10",
                                    "max": "200",
                                    "min": "1",
                                    "type": "int"
                                },
                                "Profile": {
                                    "default": "High",
                                    "options": [
                                        "Baseline",
                                        "Main",
                                        "High"
                                    ],
                                    "type": "enum"
                                },
                                "Resolution": {
                                    "default": "2368x1184",
                                    "options": [
                                        "1024x576",
                                        "1024x768",
                                        "1200x1200",
                                        "1280x1280",
                                        "1280x360",
                                        "1280x480",
                                        "1280x720",
                                        "1440x1440",
                                        "1600x1200",
                                        "1600x600",
                                        "160x160",
                                        "1728x1296",
                                        "1728x1728",
                                        "1728x648",
                                        "1920x1080",
                                        "1920x1440",
                                        "1920x1920",
                                        "1920x720",
                                        "192x72",
                                        "2048x1152",
                                        "2048x1536",
                                        "2048x2048",
                                        "2048x576",
                                        "2304x1296",
                                        "2304x1728",
                                        "2304x648",
                                        "2304x864",
                                        "2368x1184",
                                        "240x240",
                                        "2432x1824",
                                        "2560x1440",
                                        "2560x1920",
                                        "2560x720",
                                        "2560x960",
                                        "256x144",
                                        "320x120",
                                        "320x240",
                                        "320x320",
                                        "384x144",
                                        "384x288",
                                        "480x480",
                                        "640x240",
                                        "640x480",
                                        "640x640",
                                        "720x720",
                                        "768x288",
                                        "768x576",
                                        "800x800",
                                        "960x360",
                                        "960x720"
                                    ],
                                    "type": "enum"
                                }
                            },
                            "JPEG": {
                                "BitRate": {
                                    "default": "-1073741824",
                                    "max": "2147483647",
                                    "min": "1",
                                    "type": "int"
                                },
                                "EncoderInterval": {
                                    "default": "1",
                                    "max": "1",
                                    "min": "1",
                                    "type": "int"
                                },
                                "FrameRate": {
                                    "default": "30",
                                    "max": "30",
                                    "min": "1",
                                    "type": "int"
                                },
                                "Resolution": {
                                    "default": "2368x1184",
                                    "options": [
                                        "1024x576",
                                        "1024x768",
                                        "1200x1200",
                                        "1280x1280",
                                        "1280x360",
                                        "1280x480",
                                        "1280x720",
                                        "1440x1440",
                                        "1600x1200",
                                        "1600x600",
                                        "160x160",
                                        "1728x1296",
                                        "1728x1728",
                                        "1728x648",
                                        "1920x1080",
                                        "1920x1440",
                                        "1920x1920",
                                        "1920x720",
                                        "192x72",
                                        "2048x1152",
                                        "2048x1536",
                                        "2048x2048",
                                        "2048x576",
                                        "2304x1296",
                                        "2304x1728",
                                        "2304x648",
                                        "2304x864",
                                        "2368x1184",
                                        "240x240",
                                        "2432x1824",
                                        "2560x1440",
                                        "2560x1920",
                                        "2560x720",
                                        "2560x960",
                                        "256x144",
                                        "320x120",
                                        "320x240",
                                        "320x320",
                                        "384x144",
                                        "384x288",
                                        "480x480",
                                        "640x240",
                                        "640x480",
                                        "640x640",
                                        "720x720",
                                        "768x288",
                                        "768x576",
                                        "800x800",
                                        "960x360",
                                        "960x720"
                                    ],
                                    "type": "enum"
                                }
                            }
                        },
                        "default": "H264",
                        "options": [
                            "JPEG",
                            "H264"
                        ],
                        "type": "enum"
                    },
                    "Quality": {
                        "default": "50",
                        "max": "100",
                        "min": "0",
                        "type": "int"
                    }
                }
            }
        },
        "configuration": {
            "DHCP": "On",
            "Date": "2024-Apr-16",
            "Firmware": "10.12.228",
            "HardwareID": "753.2",
            "HostName": "axis-accc8ef9ea14",
            "IPAddress": "192.168.222.112",
            "MAC": "AC:CC:8E:F9:EA:14",
            "Manufacturer": "AXIS",
            "Model": "M3057",
            "NTP": {
                "Mode": "dhcp"
            },
            "NetworkGateway": "192.168.0.1",
            "ONVIF": {
                "NetworkInterfaceToken": "eth0"
            },
            "SerialNumber": "ACCC8EF9EA14",
            "SubnetMask": "255.255.255.0",
            "Time": "13:54:15",
            "TimeZone": {
                "DaylightSavings": "true",
                "PosixTZ": "EST5EDT,M3.2.0,M11.1.0"
            }
        },
        "connectionUri": "http://192.168.222.112/onvif/device_service",
        "defaultViewStreamId": 2628,
        "driver": "ONVIF",
        "features": {
            "ptz": {
                "maxPresets": "0",
                "pan": "true",
                "relativeFOV": "true",
                "tilt": "true",
                "zoom": "false"
            }
        },
        "href": "https://orchid.ipconfigure.com/service/cameras/424",
        "id": 424,
        "name": "Loading Dock",
        "primaryStream": {
            "href": "https://orchid.ipconfigure.com/service/streams/2628",
            "id": 2628,
            "status": {
                "href": "https://orchid.ipconfigure.com/service/streams/2628",
                "id": 2628,
                "lastArchiveWritten": 1751590365661,
                "lastFinalizedArchiveBytes": 19903600,
                "retryCount": 0,
                "streamState": "running",
                "streamStatistics": [
                    {
                        "video": {
                            "averageBitsPerSecond": 2759969,
                            "packetsLost": 0,
                            "packetsReceived": 14848
                        },
                        "windowSizeSeconds": 60
                    },
                    {
                        "video": {
                            "averageBitsPerSecond": 2726897,
                            "packetsLost": 0,
                            "packetsReceived": 73751
                        },
                        "windowSizeSeconds": 300
                    },
                    {
                        "video": {
                            "averageBitsPerSecond": 2716202,
                            "packetsLost": 0,
                            "packetsReceived": 220410
                        },
                        "windowSizeSeconds": 900
                    }
                ],
                "timestamp": 1751590394720
            }
        },
        "retention": 0,
        "secondaryStreams": [],
        "server": {
            "href": "https://orchid.ipconfigure.com/service/servers/1",
            "id": 1
        },
        "streams": [
            {
                "active": true,
                "camera": {
                    "href": "https://orchid.ipconfigure.com/service/cameras/424",
                    "id": 424
                },
                "configuration": {
                    "Audio": {
                        "Encoder": "none"
                    },
                    "Fixed": "true",
                    "Metadata": {
                        "Mode": "On",
                        "TopicFilter": []
                    },
                    "Name": "profile_0 h264",
                    "ONVIF": {
                        "MetadataConfigurationToken": "0",
                        "ProfileToken": "profile_0_h264",
                        "VideoEncoderConfigurationToken": "default_0_h264",
                        "VideoEncoderMulticastAddress": "0.0.0.0",
                        "VideoEncoderMulticastPort": "0"
                    },
                    "Resource": "rtsp://192.168.222.112/onvif-media/media.amp?profile=profile_0_h264&sessiontimeout=60&streamtype=unicast",
                    "Video": {
                        "BitRate": "10000",
                        "Encoder": "H264",
                        "EncoderInterval": "1",
                        "FrameRate": "30",
                        "GOVLength": "30",
                        "Profile": "Main",
                        "Quality": "100",
                        "Resolution": "2048x2048"
                    }
                },
                "dewarpConfiguration": {
                    "defaultMode": "perspective",
                    "defaultPerspectiveView": {
                        "pan": "0",
                        "tilt": "45",
                        "zoom": "0.5"
                    },
                    "enable": "true",
                    "orientation": "ceiling",
                    "panoramaAspectRatio": "4.9000000000000004",
                    "panoramaShift": "13",
                    "perspectiveDepth": "1.2"
                },
                "href": "https://orchid.ipconfigure.com/service/streams/2628",
                "id": 2628,
                "name": "profile_1 h264",
                "recordWhenSecondary": false,
                "recordingConfiguration": {
                    "bgseg": {
                        "boxArea": "8",
                        "dilate": "10",
                        "motionMask": {
                            "href": ""
                        },
                        "postErode": "2",
                        "preErode": "2",
                        "threshold": "25"
                    },
                    "decode": {
                        "keyFramesOnly": "true"
                    },
                    "filesplit": {
                        "motionMode": "0",
                        "recordState": "true"
                    },
                    "mode": "ALL_FEATURES_MODE",
                    "motionReducer": "false"
                }
            },
            {
                "active": true,
                "camera": {
                    "href": "https://orchid.ipconfigure.com/service/cameras/424",
                    "id": 424
                },
                "configuration": {
                    "Audio": {
                        "Encoder": "none"
                    },
                    "Fixed": "true",
                    "Metadata": {
                        "Mode": "On",
                        "TopicFilter": []
                    },
                    "Name": "profile_1 h264",
                    "ONVIF": {
                        "MetadataConfigurationToken": "0",
                        "ProfileToken": "profile_1_h264",
                        "VideoEncoderConfigurationToken": "default_1_h264",
                        "VideoEncoderMulticastAddress": "0.0.0.0",
                        "VideoEncoderMulticastPort": "0"
                    },
                    "Resource": "rtsp://192.168.222.112/onvif-media/media.amp?profile=profile_1_h264&sessiontimeout=60&streamtype=unicast",
                    "Video": {
                        "BitRate": "2147483647",
                        "Encoder": "H264",
                        "EncoderInterval": "1",
                        "FrameRate": "30",
                        "GOVLength": "32",
                        "Profile": "Main",
                        "Quality": "70",
                        "Resolution": "2560x720"
                    }
                },
                "dewarpConfiguration": {
                    "defaultMode": "perspective",
                    "defaultPerspectiveView": {
                        "pan": "0",
                        "tilt": "45",
                        "zoom": "0.5"
                    },
                    "enable": "true",
                    "orientation": "ceiling",
                    "panoramaAspectRatio": "3",
                    "panoramaShift": "23",
                    "perspectiveDepth": "1.1000000000000001"
                },
                "href": "https://orchid.ipconfigure.com/service/streams/2629",
                "id": 2629,
                "name": "profile_1 h264",
                "recordWhenSecondary": false,
                "recordingConfiguration": {
                    "bgseg": {
                        "boxArea": "11",
                        "dilate": "10",
                        "motionMask": {
                            "href": ""
                        },
                        "postErode": "2",
                        "preErode": "2",
                        "threshold": "25"
                    },
                    "decode": {
                        "keyFramesOnly": "true"
                    },
                    "filesplit": {
                        "motionMode": "0",
                        "recordState": "true",
                        "timePeriod": "60"
                    },
                    "mode": "ALL_FEATURES_MODE",
                    "motionReducer": "false"
                }
            },
            {
                "active": true,
                "camera": {
                    "href": "https://orchid.ipconfigure.com/service/cameras/424",
                    "id": 424
                },
                "configuration": {
                    "Audio": {
                        "Encoder": "none"
                    },
                    "Fixed": "true",
                    "Name": "profile_2 h264",
                    "ONVIF": {
                        "ProfileToken": "profile_2_h264",
                        "VideoEncoderConfigurationToken": "default_2_h264",
                        "VideoEncoderMulticastAddress": "0.0.0.0",
                        "VideoEncoderMulticastPort": "0"
                    },
                    "Resource": "rtsp://192.168.222.112/onvif-media/media.amp?profile=profile_2_h264&sessiontimeout=60&streamtype=unicast",
                    "Video": {
                        "BitRate": "2147483647",
                        "Encoder": "H264",
                        "EncoderInterval": "1",
                        "FrameRate": "30",
                        "GOVLength": "32",
                        "Profile": "Main",
                        "Quality": "70",
                        "Resolution": "2560x1440"
                    }
                },
                "dewarpConfiguration": {
                    "defaultMode": "perspective",
                    "defaultPerspectiveView": {
                        "pan": "0",
                        "tilt": "45",
                        "zoom": "0.5"
                    },
                    "enable": "true",
                    "orientation": "ceiling",
                    "panoramaAspectRatio": "3",
                    "panoramaShift": "23",
                    "perspectiveDepth": "1.1000000000000001"
                },
                "href": "https://orchid.ipconfigure.com/service/streams/2630",
                "id": 2630,
                "name": "profile_2 h264-Secondary",
                "recordWhenSecondary": true,
                "recordingConfiguration": {
                    "bgseg": {
                        "boxArea": "11",
                        "dilate": "10",
                        "motionMask": {
                            "href": ""
                        },
                        "postErode": "2",
                        "preErode": "2",
                        "threshold": "25"
                    },
                    "decode": {
                        "keyFramesOnly": "true"
                    },
                    "filesplit": {
                        "motionMode": "0",
                        "recordState": "true",
                        "timePeriod": "60"
                    },
                    "mode": "ALL_FEATURES_MODE",
                    "motionReducer": "false"
                }
            },
            {
                "active": true,
                "camera": {
                    "href": "https://orchid.ipconfigure.com/service/cameras/424",
                    "id": 424
                },
                "configuration": {
                    "Audio": {
                        "Encoder": "none"
                    },
                    "Fixed": "true",
                    "Name": "profile_3 h264",
                    "ONVIF": {
                        "ProfileToken": "profile_3_h264",
                        "VideoEncoderConfigurationToken": "default_3_h264",
                        "VideoEncoderMulticastAddress": "0.0.0.0",
                        "VideoEncoderMulticastPort": "0"
                    },
                    "Resource": "rtsp://192.168.222.112/onvif-media/media.amp?profile=profile_3_h264&sessiontimeout=60&streamtype=unicast",
                    "Video": {
                        "BitRate": "2147483647",
                        "Encoder": "H264",
                        "EncoderInterval": "1",
                        "FrameRate": "30",
                        "GOVLength": "32",
                        "Profile": "Main",
                        "Quality": "70",
                        "Resolution": "2560x1440"
                    }
                },
                "dewarpConfiguration": {
                    "defaultMode": "perspective",
                    "defaultPerspectiveView": {
                        "pan": "0",
                        "tilt": "45",
                        "zoom": "0.5"
                    },
                    "enable": "true",
                    "orientation": "ceiling",
                    "panoramaAspectRatio": "3",
                    "panoramaShift": "23",
                    "perspectiveDepth": "1.1000000000000001"
                },
                "href": "https://orchid.ipconfigure.com/service/streams/2631",
                "id": 2631,
                "name": "profile_3 h264-Secondary",
                "recordWhenSecondary": false,
                "recordingConfiguration": {
                    "bgseg": {
                        "boxArea": "11",
                        "dilate": "10",
                        "motionMask": {
                            "href": ""
                        },
                        "postErode": "2",
                        "preErode": "2",
                        "threshold": "25"
                    },
                    "decode": {
                        "keyFramesOnly": "true"
                    },
                    "filesplit": {
                        "motionMode": "0",
                        "recordState": "true",
                        "timePeriod": "60"
                    },
                    "mode": "ALL_FEATURES_MODE",
                    "motionReducer": "false"
                }
            },
            {
                "active": true,
                "camera": {
                    "href": "https://orchid.ipconfigure.com/service/cameras/424",
                    "id": 424
                },
                "configuration": {
                    "Audio": {
                        "Encoder": "none"
                    },
                    "Fixed": "true",
                    "Name": "profile_4 h264",
                    "ONVIF": {
                        "ProfileToken": "profile_4_h264",
                        "VideoEncoderConfigurationToken": "default_4_h264",
                        "VideoEncoderMulticastAddress": "0.0.0.0",
                        "VideoEncoderMulticastPort": "0"
                    },
                    "Resource": "rtsp://192.168.222.112/onvif-media/media.amp?profile=profile_4_h264&sessiontimeout=60&streamtype=unicast",
                    "Video": {
                        "BitRate": "2147483647",
                        "Encoder": "H264",
                        "EncoderInterval": "1",
                        "FrameRate": "30",
                        "GOVLength": "32",
                        "Profile": "Main",
                        "Quality": "70",
                        "Resolution": "1920x1080"
                    }
                },
                "dewarpConfiguration": {
                    "defaultMode": "perspective",
                    "defaultPerspectiveView": {
                        "pan": "0",
                        "tilt": "45",
                        "zoom": "0.5"
                    },
                    "enable": "true",
                    "orientation": "ceiling",
                    "panoramaAspectRatio": "3",
                    "panoramaShift": "23",
                    "perspectiveDepth": "1.1000000000000001"
                },
                "href": "https://orchid.ipconfigure.com/service/streams/2632",
                "id": 2632,
                "name": "profile_4 h264",
                "recordWhenSecondary": false,
                "recordingConfiguration": {
                    "bgseg": {
                        "boxArea": "11",
                        "dilate": "10",
                        "motionMask": {
                            "href": ""
                        },
                        "postErode": "2",
                        "preErode": "2",
                        "threshold": "25"
                    },
                    "decode": {
                        "keyFramesOnly": "true"
                    },
                    "filesplit": {
                        "motionMode": "0",
                        "recordState": "true",
                        "timePeriod": "60"
                    },
                    "mode": "ALL_FEATURES_MODE",
                    "motionReducer": "false"
                }
            },
            {
                "active": true,
                "camera": {
                    "href": "https://orchid.ipconfigure.com/service/cameras/424",
                    "id": 424
                },
                "configuration": {
                    "Audio": {
                        "Encoder": "none"
                    },
                    "Fixed": "true",
                    "Name": "profile_5 h264",
                    "ONVIF": {
                        "ProfileToken": "profile_5_h264",
                        "VideoEncoderConfigurationToken": "default_5_h264",
                        "VideoEncoderMulticastAddress": "0.0.0.0",
                        "VideoEncoderMulticastPort": "0"
                    },
                    "Resource": "rtsp://192.168.222.112/onvif-media/media.amp?profile=profile_5_h264&sessiontimeout=60&streamtype=unicast",
                    "Video": {
                        "BitRate": "2147483647",
                        "Encoder": "H264",
                        "EncoderInterval": "1",
                        "FrameRate": "30",
                        "GOVLength": "32",
                        "Profile": "Main",
                        "Quality": "70",
                        "Resolution": "1920x1080"
                    }
                },
                "dewarpConfiguration": {
                    "defaultMode": "perspective",
                    "defaultPerspectiveView": {
                        "pan": "0",
                        "tilt": "45",
                        "zoom": "0.5"
                    },
                    "enable": "true",
                    "orientation": "ceiling",
                    "panoramaAspectRatio": "3",
                    "panoramaShift": "23",
                    "perspectiveDepth": "1.1000000000000001"
                },
                "href": "https://orchid.ipconfigure.com/service/streams/2633",
                "id": 2633,
                "name": "profile_5 h264",
                "recordWhenSecondary": false,
                "recordingConfiguration": {
                    "bgseg": {
                        "boxArea": "11",
                        "dilate": "10",
                        "motionMask": {
                            "href": ""
                        },
                        "postErode": "2",
                        "preErode": "2",
                        "threshold": "25"
                    },
                    "decode": {
                        "keyFramesOnly": "true"
                    },
                    "filesplit": {
                        "motionMode": "0",
                        "recordState": "true",
                        "timePeriod": "60"
                    },
                    "mode": "ALL_FEATURES_MODE",
                    "motionReducer": "false"
                }
            },
            {
                "active": true,
                "camera": {
                    "href": "https://orchid.ipconfigure.com/service/cameras/424",
                    "id": 424
                },
                "configuration": {
                    "Audio": {
                        "Encoder": "none"
                    },
                    "Fixed": "true",
                    "Name": "profile_6 h264",
                    "ONVIF": {
                        "ProfileToken": "profile_6_h264",
                        "VideoEncoderConfigurationToken": "default_6_h264",
                        "VideoEncoderMulticastAddress": "0.0.0.0",
                        "VideoEncoderMulticastPort": "0"
                    },
                    "Resource": "rtsp://192.168.222.112/onvif-media/media.amp?profile=profile_6_h264&sessiontimeout=60&streamtype=unicast",
                    "Video": {
                        "BitRate": "2147483647",
                        "Encoder": "H264",
                        "EncoderInterval": "1",
                        "FrameRate": "30",
                        "GOVLength": "32",
                        "Profile": "Main",
                        "Quality": "70",
                        "Resolution": "1920x1080"
                    }
                },
                "dewarpConfiguration": {
                    "defaultMode": "perspective",
                    "defaultPerspectiveView": {
                        "pan": "0",
                        "tilt": "45",
                        "zoom": "0.5"
                    },
                    "enable": "true",
                    "orientation": "ceiling",
                    "panoramaAspectRatio": "3",
                    "panoramaShift": "23",
                    "perspectiveDepth": "1.1000000000000001"
                },
                "href": "https://orchid.ipconfigure.com/service/streams/2634",
                "id": 2634,
                "name": "profile_6 h264",
                "recordWhenSecondary": false,
                "recordingConfiguration": {
                    "bgseg": {
                        "boxArea": "11",
                        "dilate": "10",
                        "motionMask": {
                            "href": ""
                        },
                        "postErode": "2",
                        "preErode": "2",
                        "threshold": "25"
                    },
                    "decode": {
                        "keyFramesOnly": "true"
                    },
                    "filesplit": {
                        "motionMode": "0",
                        "recordState": "true",
                        "timePeriod": "60"
                    },
                    "mode": "ALL_FEATURES_MODE",
                    "motionReducer": "false"
                }
            },
            {
                "active": true,
                "camera": {
                    "href": "https://orchid.ipconfigure.com/service/cameras/424",
                    "id": 424
                },
                "configuration": {
                    "Audio": {
                        "Encoder": "none"
                    },
                    "Fixed": "true",
                    "Name": "profile_7 h264",
                    "ONVIF": {
                        "ProfileToken": "profile_7_h264",
                        "VideoEncoderConfigurationToken": "default_7_h264",
                        "VideoEncoderMulticastAddress": "0.0.0.0",
                        "VideoEncoderMulticastPort": "0"
                    },
                    "Resource": "rtsp://192.168.222.112/onvif-media/media.amp?profile=profile_7_h264&sessiontimeout=60&streamtype=unicast",
                    "Video": {
                        "BitRate": "2147483647",
                        "Encoder": "H264",
                        "EncoderInterval": "1",
                        "FrameRate": "30",
                        "GOVLength": "32",
                        "Profile": "Main",
                        "Quality": "70",
                        "Resolution": "1920x1080"
                    }
                },
                "dewarpConfiguration": {
                    "defaultMode": "perspective",
                    "defaultPerspectiveView": {
                        "pan": "0",
                        "tilt": "45",
                        "zoom": "0.5"
                    },
                    "enable": "true",
                    "orientation": "ceiling",
                    "panoramaAspectRatio": "3",
                    "panoramaShift": "23",
                    "perspectiveDepth": "1.1000000000000001"
                },
                "href": "https://orchid.ipconfigure.com/service/streams/2635",
                "id": 2635,
                "name": "profile_7 h264",
                "recordWhenSecondary": false,
                "recordingConfiguration": {
                    "bgseg": {
                        "boxArea": "11",
                        "dilate": "10",
                        "motionMask": {
                            "href": ""
                        },
                        "postErode": "2",
                        "preErode": "2",
                        "threshold": "25"
                    },
                    "decode": {
                        "keyFramesOnly": "true"
                    },
                    "filesplit": {
                        "motionMode": "0",
                        "recordState": "true",
                        "timePeriod": "60"
                    },
                    "mode": "ALL_FEATURES_MODE",
                    "motionReducer": "false"
                }
            },
            {
                "active": true,
                "camera": {
                    "href": "https://orchid.ipconfigure.com/service/cameras/424",
                    "id": 424
                },
                "configuration": {
                    "Audio": {
                        "Encoder": "none"
                    },
                    "Fixed": "true",
                    "Name": "profile_8 h264",
                    "ONVIF": {
                        "ProfileToken": "profile_8_h264",
                        "VideoEncoderConfigurationToken": "default_8_h264",
                        "VideoEncoderMulticastAddress": "0.0.0.0",
                        "VideoEncoderMulticastPort": "0"
                    },
                    "Resource": "rtsp://192.168.222.112/onvif-media/media.amp?profile=profile_8_h264&sessiontimeout=60&streamtype=unicast",
                    "Video": {
                        "BitRate": "2147483647",
                        "Encoder": "H264",
                        "EncoderInterval": "1",
                        "FrameRate": "30",
                        "GOVLength": "32",
                        "Profile": "Main",
                        "Quality": "70",
                        "Resolution": "2304x864"
                    }
                },
                "dewarpConfiguration": {},
                "href": "https://orchid.ipconfigure.com/service/streams/2636",
                "id": 2636,
                "name": "profile_8 h264",
                "recordWhenSecondary": false,
                "recordingConfiguration": {
                    "bgseg": {
                        "boxArea": "1",
                        "dilate": "10",
                        "motionMask": {
                            "href": ""
                        },
                        "postErode": "2",
                        "preErode": "2",
                        "threshold": "25"
                    },
                    "decode": {
                        "keyFramesOnly": "true"
                    },
                    "filesplit": {
                        "motionMode": "0",
                        "recordState": "true",
                        "timePeriod": "60"
                    },
                    "mode": "ALL_FEATURES_MODE",
                    "motionReducer": "false"
                }
            },
            {
                "active": true,
                "camera": {
                    "href": "https://orchid.ipconfigure.com/service/cameras/424",
                    "id": 424
                },
                "configuration": {
                    "Audio": {
                        "Encoder": "none"
                    },
                    "Fixed": "true",
                    "Name": "profile_9 h264",
                    "ONVIF": {
                        "ProfileToken": "profile_9_h264",
                        "VideoEncoderConfigurationToken": "default_9_h264",
                        "VideoEncoderMulticastAddress": "0.0.0.0",
                        "VideoEncoderMulticastPort": "0"
                    },
                    "Resource": "rtsp://192.168.222.112/onvif-media/media.amp?profile=profile_9_h264&sessiontimeout=60&streamtype=unicast",
                    "Video": {
                        "BitRate": "2147483647",
                        "Encoder": "H264",
                        "EncoderInterval": "1",
                        "FrameRate": "30",
                        "GOVLength": "32",
                        "Profile": "Main",
                        "Quality": "70",
                        "Resolution": "2304x864"
                    }
                },
                "dewarpConfiguration": {},
                "href": "https://orchid.ipconfigure.com/service/streams/2637",
                "id": 2637,
                "name": "profile_9 h264",
                "recordWhenSecondary": false,
                "recordingConfiguration": {
                    "bgseg": {
                        "boxArea": "1",
                        "dilate": "10",
                        "motionMask": {
                            "href": ""
                        },
                        "postErode": "2",
                        "preErode": "2",
                        "threshold": "25"
                    },
                    "decode": {
                        "keyFramesOnly": "true"
                    },
                    "filesplit": {
                        "motionMode": "0",
                        "recordState": "true",
                        "timePeriod": "60"
                    },
                    "mode": "ALL_FEATURES_MODE",
                    "motionReducer": "false"
                }
            },
            {
                "active": true,
                "camera": {
                    "href": "https://orchid.ipconfigure.com/service/cameras/424",
                    "id": 424
                },
                "configuration": {
                    "Audio": {
                        "Encoder": "none"
                    },
                    "Fixed": "true",
                    "Name": "profile_10 h264",
                    "ONVIF": {
                        "ProfileToken": "profile_10_h264",
                        "VideoEncoderConfigurationToken": "default_10_h264",
                        "VideoEncoderMulticastAddress": "0.0.0.0",
                        "VideoEncoderMulticastPort": "0"
                    },
                    "Resource": "rtsp://192.168.222.112/onvif-media/media.amp?profile=profile_10_h264&sessiontimeout=60&streamtype=unicast",
                    "Video": {
                        "BitRate": "2147483647",
                        "Encoder": "H264",
                        "EncoderInterval": "1",
                        "FrameRate": "30",
                        "GOVLength": "32",
                        "Profile": "Main",
                        "Quality": "70",
                        "Resolution": "1920x1440"
                    }
                },
                "dewarpConfiguration": {
                    "defaultMode": "perspective",
                    "defaultPerspectiveView": {
                        "pan": "0",
                        "tilt": "45",
                        "zoom": "0.5"
                    },
                    "enable": "true",
                    "orientation": "ceiling",
                    "panoramaAspectRatio": "3",
                    "panoramaShift": "23",
                    "perspectiveDepth": "1.1000000000000001"
                },
                "href": "https://orchid.ipconfigure.com/service/streams/2638",
                "id": 2638,
                "name": "profile_10 h264",
                "recordWhenSecondary": false,
                "recordingConfiguration": {
                    "bgseg": {
                        "boxArea": "11",
                        "dilate": "10",
                        "motionMask": {
                            "href": ""
                        },
                        "postErode": "2",
                        "preErode": "2",
                        "threshold": "25"
                    },
                    "decode": {
                        "keyFramesOnly": "true"
                    },
                    "filesplit": {
                        "motionMode": "0",
                        "recordState": "true",
                        "timePeriod": "60"
                    },
                    "mode": "ALL_FEATURES_MODE",
                    "motionReducer": "false"
                }
            },
            {
                "active": true,
                "camera": {
                    "href": "https://orchid.ipconfigure.com/service/cameras/424",
                    "id": 424
                },
                "configuration": {
                    "Audio": {
                        "Encoder": "none"
                    },
                    "Fixed": "true",
                    "Name": "profile_11 h264",
                    "ONVIF": {
                        "ProfileToken": "profile_11_h264",
                        "VideoEncoderConfigurationToken": "default_11_h264",
                        "VideoEncoderMulticastAddress": "0.0.0.0",
                        "VideoEncoderMulticastPort": "0"
                    },
                    "Resource": "rtsp://192.168.222.112/onvif-media/media.amp?profile=profile_11_h264&sessiontimeout=60&streamtype=unicast",
                    "Video": {
                        "BitRate": "2147483647",
                        "Encoder": "H264",
                        "EncoderInterval": "1",
                        "FrameRate": "30",
                        "GOVLength": "32",
                        "Profile": "Main",
                        "Quality": "70",
                        "Resolution": "2560x1440"
                    }
                },
                "dewarpConfiguration": {
                    "defaultMode": "perspective",
                    "defaultPerspectiveView": {
                        "pan": "0",
                        "tilt": "45",
                        "zoom": "0.5"
                    },
                    "enable": "true",
                    "orientation": "ceiling",
                    "panoramaAspectRatio": "3",
                    "panoramaShift": "23",
                    "perspectiveDepth": "1.1000000000000001"
                },
                "href": "https://orchid.ipconfigure.com/service/streams/2639",
                "id": 2639,
                "name": "profile_11 h264",
                "recordWhenSecondary": false,
                "recordingConfiguration": {
                    "bgseg": {
                        "boxArea": "11",
                        "dilate": "10",
                        "motionMask": {
                            "href": ""
                        },
                        "postErode": "2",
                        "preErode": "2",
                        "threshold": "25"
                    },
                    "decode": {
                        "keyFramesOnly": "true"
                    },
                    "filesplit": {
                        "motionMode": "0",
                        "recordState": "true",
                        "timePeriod": "60"
                    },
                    "mode": "ALL_FEATURES_MODE",
                    "motionReducer": "false"
                }
            },
            {
                "active": true,
                "camera": {
                    "href": "https://orchid.ipconfigure.com/service/cameras/424",
                    "id": 424
                },
                "configuration": {
                    "Audio": {
                        "Encoder": "none"
                    },
                    "Fixed": "true",
                    "Name": "profile_0 jpeg",
                    "ONVIF": {
                        "ProfileToken": "profile_0_jpeg",
                        "VideoEncoderConfigurationToken": "default_0_jpeg",
                        "VideoEncoderMulticastAddress": "0.0.0.0",
                        "VideoEncoderMulticastPort": "0"
                    },
                    "Resource": "rtsp://192.168.222.112/onvif-media/media.amp?profile=profile_0_jpeg&sessiontimeout=60&streamtype=unicast",
                    "Video": {
                        "BitRate": "2147483647",
                        "Encoder": "JPEG",
                        "EncoderInterval": "1",
                        "FrameRate": "1",
                        "Quality": "70",
                        "Resolution": "2048x2048"
                    }
                },
                "dewarpConfiguration": {},
                "href": "https://orchid.ipconfigure.com/service/streams/2640",
                "id": 2640,
                "name": "profile_0 jpeg",
                "recordWhenSecondary": false,
                "recordingConfiguration": {
                    "bgseg": {
                        "boxArea": "1",
                        "dilate": "10",
                        "motionMask": {
                            "href": ""
                        },
                        "postErode": "2",
                        "preErode": "2",
                        "threshold": "25"
                    },
                    "decode": {
                        "keyFramesOnly": "true"
                    },
                    "filesplit": {
                        "motionMode": "0",
                        "recordState": "true",
                        "timePeriod": "60"
                    },
                    "mode": "ALL_FEATURES_MODE",
                    "motionReducer": "false"
                }
            },
            {
                "active": true,
                "camera": {
                    "href": "https://orchid.ipconfigure.com/service/cameras/424",
                    "id": 424
                },
                "configuration": {
                    "Audio": {
                        "Encoder": "none"
                    },
                    "Fixed": "true",
                    "Name": "profile_1 jpeg",
                    "ONVIF": {
                        "ProfileToken": "profile_1_jpeg",
                        "VideoEncoderConfigurationToken": "default_1_jpeg",
                        "VideoEncoderMulticastAddress": "0.0.0.0",
                        "VideoEncoderMulticastPort": "0"
                    },
                    "Resource": "rtsp://192.168.222.112/onvif-media/media.amp?profile=profile_1_jpeg&sessiontimeout=60&streamtype=unicast",
                    "Video": {
                        "BitRate": "2147483647",
                        "Encoder": "JPEG",
                        "EncoderInterval": "1",
                        "FrameRate": "30",
                        "Quality": "70",
                        "Resolution": "2560x720"
                    }
                },
                "dewarpConfiguration": {},
                "href": "https://orchid.ipconfigure.com/service/streams/2641",
                "id": 2641,
                "name": "profile_1 jpeg",
                "recordWhenSecondary": false,
                "recordingConfiguration": {
                    "bgseg": {
                        "boxArea": "1",
                        "dilate": "10",
                        "motionMask": {
                            "href": ""
                        },
                        "postErode": "2",
                        "preErode": "2",
                        "threshold": "25"
                    },
                    "decode": {
                        "keyFramesOnly": "true"
                    },
                    "filesplit": {
                        "motionMode": "0",
                        "recordState": "true",
                        "timePeriod": "60"
                    },
                    "mode": "ALL_FEATURES_MODE",
                    "motionReducer": "false"
                }
            },
            {
                "active": true,
                "camera": {
                    "href": "https://orchid.ipconfigure.com/service/cameras/424",
                    "id": 424
                },
                "configuration": {
                    "Audio": {
                        "Encoder": "none"
                    },
                    "Fixed": "true",
                    "Name": "profile_2 jpeg",
                    "ONVIF": {
                        "ProfileToken": "profile_2_jpeg",
                        "VideoEncoderConfigurationToken": "default_2_jpeg",
                        "VideoEncoderMulticastAddress": "0.0.0.0",
                        "VideoEncoderMulticastPort": "0"
                    },
                    "Resource": "rtsp://192.168.222.112/onvif-media/media.amp?profile=profile_2_jpeg&sessiontimeout=60&streamtype=unicast",
                    "Video": {
                        "BitRate": "2147483647",
                        "Encoder": "JPEG",
                        "EncoderInterval": "1",
                        "FrameRate": "30",
                        "Quality": "70",
                        "Resolution": "2560x1440"
                    }
                },
                "dewarpConfiguration": {},
                "href": "https://orchid.ipconfigure.com/service/streams/2642",
                "id": 2642,
                "name": "profile_2 jpeg",
                "recordWhenSecondary": false,
                "recordingConfiguration": {
                    "bgseg": {
                        "boxArea": "1",
                        "dilate": "10",
                        "motionMask": {
                            "href": ""
                        },
                        "postErode": "2",
                        "preErode": "2",
                        "threshold": "25"
                    },
                    "decode": {
                        "keyFramesOnly": "true"
                    },
                    "filesplit": {
                        "motionMode": "0",
                        "recordState": "true",
                        "timePeriod": "60"
                    },
                    "mode": "ALL_FEATURES_MODE",
                    "motionReducer": "false"
                }
            },
            {
                "active": true,
                "camera": {
                    "href": "https://orchid.ipconfigure.com/service/cameras/424",
                    "id": 424
                },
                "configuration": {
                    "Audio": {
                        "Encoder": "none"
                    },
                    "Fixed": "true",
                    "Name": "profile_3 jpeg",
                    "ONVIF": {
                        "ProfileToken": "profile_3_jpeg",
                        "VideoEncoderConfigurationToken": "default_3_jpeg",
                        "VideoEncoderMulticastAddress": "0.0.0.0",
                        "VideoEncoderMulticastPort": "0"
                    },
                    "Resource": "rtsp://192.168.222.112/onvif-media/media.amp?profile=profile_3_jpeg&sessiontimeout=60&streamtype=unicast",
                    "Video": {
                        "BitRate": "2147483647",
                        "Encoder": "JPEG",
                        "EncoderInterval": "1",
                        "FrameRate": "30",
                        "Quality": "70",
                        "Resolution": "2560x1440"
                    }
                },
                "dewarpConfiguration": {},
                "href": "https://orchid.ipconfigure.com/service/streams/2643",
                "id": 2643,
                "name": "profile_3 jpeg",
                "recordWhenSecondary": false,
                "recordingConfiguration": {
                    "bgseg": {
                        "boxArea": "1",
                        "dilate": "10",
                        "motionMask": {
                            "href": ""
                        },
                        "postErode": "2",
                        "preErode": "2",
                        "threshold": "25"
                    },
                    "decode": {
                        "keyFramesOnly": "true"
                    },
                    "filesplit": {
                        "motionMode": "0",
                        "recordState": "true",
                        "timePeriod": "60"
                    },
                    "mode": "ALL_FEATURES_MODE",
                    "motionReducer": "false"
                }
            },
            {
                "active": true,
                "camera": {
                    "href": "https://orchid.ipconfigure.com/service/cameras/424",
                    "id": 424
                },
                "configuration": {
                    "Audio": {
                        "Encoder": "none"
                    },
                    "Fixed": "true",
                    "Name": "profile_4 jpeg",
                    "ONVIF": {
                        "ProfileToken": "profile_4_jpeg",
                        "VideoEncoderConfigurationToken": "default_4_jpeg",
                        "VideoEncoderMulticastAddress": "0.0.0.0",
                        "VideoEncoderMulticastPort": "0"
                    },
                    "Resource": "rtsp://192.168.222.112/onvif-media/media.amp?profile=profile_4_jpeg&sessiontimeout=60&streamtype=unicast",
                    "Video": {
                        "BitRate": "2147483647",
                        "Encoder": "JPEG",
                        "EncoderInterval": "1",
                        "FrameRate": "30",
                        "Quality": "70",
                        "Resolution": "1920x1080"
                    }
                },
                "dewarpConfiguration": {},
                "href": "https://orchid.ipconfigure.com/service/streams/2644",
                "id": 2644,
                "name": "profile_4 jpeg",
                "recordWhenSecondary": false,
                "recordingConfiguration": {
                    "bgseg": {
                        "boxArea": "1",
                        "dilate": "10",
                        "motionMask": {
                            "href": ""
                        },
                        "postErode": "2",
                        "preErode": "2",
                        "threshold": "25"
                    },
                    "decode": {
                        "keyFramesOnly": "true"
                    },
                    "filesplit": {
                        "motionMode": "0",
                        "recordState": "true",
                        "timePeriod": "60"
                    },
                    "mode": "ALL_FEATURES_MODE",
                    "motionReducer": "false"
                }
            },
            {
                "active": true,
                "camera": {
                    "href": "https://orchid.ipconfigure.com/service/cameras/424",
                    "id": 424
                },
                "configuration": {
                    "Audio": {
                        "Encoder": "none"
                    },
                    "Fixed": "true",
                    "Name": "profile_5 jpeg",
                    "ONVIF": {
                        "ProfileToken": "profile_5_jpeg",
                        "VideoEncoderConfigurationToken": "default_5_jpeg",
                        "VideoEncoderMulticastAddress": "0.0.0.0",
                        "VideoEncoderMulticastPort": "0"
                    },
                    "Resource": "rtsp://192.168.222.112/onvif-media/media.amp?profile=profile_5_jpeg&sessiontimeout=60&streamtype=unicast",
                    "Video": {
                        "BitRate": "2147483647",
                        "Encoder": "JPEG",
                        "EncoderInterval": "1",
                        "FrameRate": "30",
                        "Quality": "70",
                        "Resolution": "1920x1080"
                    }
                },
                "dewarpConfiguration": {},
                "href": "https://orchid.ipconfigure.com/service/streams/2645",
                "id": 2645,
                "name": "profile_5 jpeg",
                "recordWhenSecondary": false,
                "recordingConfiguration": {
                    "bgseg": {
                        "boxArea": "1",
                        "dilate": "10",
                        "motionMask": {
                            "href": ""
                        },
                        "postErode": "2",
                        "preErode": "2",
                        "threshold": "25"
                    },
                    "decode": {
                        "keyFramesOnly": "true"
                    },
                    "filesplit": {
                        "motionMode": "0",
                        "recordState": "true",
                        "timePeriod": "60"
                    },
                    "mode": "ALL_FEATURES_MODE",
                    "motionReducer": "false"
                }
            },
            {
                "active": true,
                "camera": {
                    "href": "https://orchid.ipconfigure.com/service/cameras/424",
                    "id": 424
                },
                "configuration": {
                    "Audio": {
                        "Encoder": "none"
                    },
                    "Fixed": "true",
                    "Name": "profile_6 jpeg",
                    "ONVIF": {
                        "ProfileToken": "profile_6_jpeg",
                        "VideoEncoderConfigurationToken": "default_6_jpeg",
                        "VideoEncoderMulticastAddress": "0.0.0.0",
                        "VideoEncoderMulticastPort": "0"
                    },
                    "Resource": "rtsp://192.168.222.112/onvif-media/media.amp?profile=profile_6_jpeg&sessiontimeout=60&streamtype=unicast",
                    "Video": {
                        "BitRate": "2147483647",
                        "Encoder": "JPEG",
                        "EncoderInterval": "1",
                        "FrameRate": "30",
                        "Quality": "70",
                        "Resolution": "1920x1080"
                    }
                },
                "dewarpConfiguration": {},
                "href": "https://orchid.ipconfigure.com/service/streams/2646",
                "id": 2646,
                "name": "profile_6 jpeg",
                "recordWhenSecondary": false,
                "recordingConfiguration": {
                    "bgseg": {
                        "boxArea": "1",
                        "dilate": "10",
                        "motionMask": {
                            "href": ""
                        },
                        "postErode": "2",
                        "preErode": "2",
                        "threshold": "25"
                    },
                    "decode": {
                        "keyFramesOnly": "true"
                    },
                    "filesplit": {
                        "motionMode": "0",
                        "recordState": "true",
                        "timePeriod": "60"
                    },
                    "mode": "ALL_FEATURES_MODE",
                    "motionReducer": "false"
                }
            },
            {
                "active": true,
                "camera": {
                    "href": "https://orchid.ipconfigure.com/service/cameras/424",
                    "id": 424
                },
                "configuration": {
                    "Audio": {
                        "Encoder": "none"
                    },
                    "Fixed": "true",
                    "Name": "profile_7 jpeg",
                    "ONVIF": {
                        "ProfileToken": "profile_7_jpeg",
                        "VideoEncoderConfigurationToken": "default_7_jpeg",
                        "VideoEncoderMulticastAddress": "0.0.0.0",
                        "VideoEncoderMulticastPort": "0"
                    },
                    "Resource": "rtsp://192.168.222.112/onvif-media/media.amp?profile=profile_7_jpeg&sessiontimeout=60&streamtype=unicast",
                    "Video": {
                        "BitRate": "2147483647",
                        "Encoder": "JPEG",
                        "EncoderInterval": "1",
                        "FrameRate": "30",
                        "Quality": "70",
                        "Resolution": "1920x1080"
                    }
                },
                "dewarpConfiguration": {},
                "href": "https://orchid.ipconfigure.com/service/streams/2647",
                "id": 2647,
                "name": "profile_7 jpeg",
                "recordWhenSecondary": false,
                "recordingConfiguration": {
                    "bgseg": {
                        "boxArea": "1",
                        "dilate": "10",
                        "motionMask": {
                            "href": ""
                        },
                        "postErode": "2",
                        "preErode": "2",
                        "threshold": "25"
                    },
                    "decode": {
                        "keyFramesOnly": "true"
                    },
                    "filesplit": {
                        "motionMode": "0",
                        "recordState": "true",
                        "timePeriod": "60"
                    },
                    "mode": "ALL_FEATURES_MODE",
                    "motionReducer": "false"
                }
            },
            {
                "active": true,
                "camera": {
                    "href": "https://orchid.ipconfigure.com/service/cameras/424",
                    "id": 424
                },
                "configuration": {
                    "Audio": {
                        "Encoder": "none"
                    },
                    "Fixed": "true",
                    "Name": "profile_8 jpeg",
                    "ONVIF": {
                        "ProfileToken": "profile_8_jpeg",
                        "VideoEncoderConfigurationToken": "default_8_jpeg",
                        "VideoEncoderMulticastAddress": "0.0.0.0",
                        "VideoEncoderMulticastPort": "0"
                    },
                    "Resource": "rtsp://192.168.222.112/onvif-media/media.amp?profile=profile_8_jpeg&sessiontimeout=60&streamtype=unicast",
                    "Video": {
                        "BitRate": "2147483647",
                        "Encoder": "JPEG",
                        "EncoderInterval": "1",
                        "FrameRate": "30",
                        "Quality": "70",
                        "Resolution": "2304x864"
                    }
                },
                "dewarpConfiguration": {},
                "href": "https://orchid.ipconfigure.com/service/streams/2648",
                "id": 2648,
                "name": "profile_8 jpeg",
                "recordWhenSecondary": false,
                "recordingConfiguration": {
                    "bgseg": {
                        "boxArea": "1",
                        "dilate": "10",
                        "motionMask": {
                            "href": ""
                        },
                        "postErode": "2",
                        "preErode": "2",
                        "threshold": "25"
                    },
                    "decode": {
                        "keyFramesOnly": "true"
                    },
                    "filesplit": {
                        "motionMode": "0",
                        "recordState": "true",
                        "timePeriod": "60"
                    },
                    "mode": "ALL_FEATURES_MODE",
                    "motionReducer": "false"
                }
            },
            {
                "active": true,
                "camera": {
                    "href": "https://orchid.ipconfigure.com/service/cameras/424",
                    "id": 424
                },
                "configuration": {
                    "Audio": {
                        "Encoder": "none"
                    },
                    "Fixed": "true",
                    "Name": "profile_9 jpeg",
                    "ONVIF": {
                        "ProfileToken": "profile_9_jpeg",
                        "VideoEncoderConfigurationToken": "default_9_jpeg",
                        "VideoEncoderMulticastAddress": "0.0.0.0",
                        "VideoEncoderMulticastPort": "0"
                    },
                    "Resource": "rtsp://192.168.222.112/onvif-media/media.amp?profile=profile_9_jpeg&sessiontimeout=60&streamtype=unicast",
                    "Video": {
                        "BitRate": "2147483647",
                        "Encoder": "JPEG",
                        "EncoderInterval": "1",
                        "FrameRate": "30",
                        "Quality": "70",
                        "Resolution": "2304x864"
                    }
                },
                "dewarpConfiguration": {},
                "href": "https://orchid.ipconfigure.com/service/streams/2649",
                "id": 2649,
                "name": "profile_9 jpeg",
                "recordWhenSecondary": false,
                "recordingConfiguration": {
                    "bgseg": {
                        "boxArea": "1",
                        "dilate": "10",
                        "motionMask": {
                            "href": ""
                        },
                        "postErode": "2",
                        "preErode": "2",
                        "threshold": "25"
                    },
                    "decode": {
                        "keyFramesOnly": "true"
                    },
                    "filesplit": {
                        "motionMode": "0",
                        "recordState": "true",
                        "timePeriod": "60"
                    },
                    "mode": "ALL_FEATURES_MODE",
                    "motionReducer": "false"
                }
            },
            {
                "active": true,
                "camera": {
                    "href": "https://orchid.ipconfigure.com/service/cameras/424",
                    "id": 424
                },
                "configuration": {
                    "Audio": {
                        "Encoder": "none"
                    },
                    "Fixed": "true",
                    "Name": "profile_10 jpeg",
                    "ONVIF": {
                        "ProfileToken": "profile_10_jpeg",
                        "VideoEncoderConfigurationToken": "default_10_jpeg",
                        "VideoEncoderMulticastAddress": "0.0.0.0",
                        "VideoEncoderMulticastPort": "0"
                    },
                    "Resource": "rtsp://192.168.222.112/onvif-media/media.amp?profile=profile_10_jpeg&sessiontimeout=60&streamtype=unicast",
                    "Video": {
                        "BitRate": "2147483647",
                        "Encoder": "JPEG",
                        "EncoderInterval": "1",
                        "FrameRate": "30",
                        "Quality": "70",
                        "Resolution": "1920x1440"
                    }
                },
                "dewarpConfiguration": {},
                "href": "https://orchid.ipconfigure.com/service/streams/2650",
                "id": 2650,
                "name": "profile_10 jpeg",
                "recordWhenSecondary": false,
                "recordingConfiguration": {
                    "bgseg": {
                        "boxArea": "1",
                        "dilate": "10",
                        "motionMask": {
                            "href": ""
                        },
                        "postErode": "2",
                        "preErode": "2",
                        "threshold": "25"
                    },
                    "decode": {
                        "keyFramesOnly": "true"
                    },
                    "filesplit": {
                        "motionMode": "0",
                        "recordState": "true",
                        "timePeriod": "60"
                    },
                    "mode": "ALL_FEATURES_MODE",
                    "motionReducer": "false"
                }
            },
            {
                "active": true,
                "camera": {
                    "href": "https://orchid.ipconfigure.com/service/cameras/424",
                    "id": 424
                },
                "configuration": {
                    "Audio": {
                        "Encoder": "none"
                    },
                    "Fixed": "true",
                    "Name": "profile_11 jpeg",
                    "ONVIF": {
                        "ProfileToken": "profile_11_jpeg",
                        "VideoEncoderConfigurationToken": "default_11_jpeg",
                        "VideoEncoderMulticastAddress": "0.0.0.0",
                        "VideoEncoderMulticastPort": "0"
                    },
                    "Resource": "rtsp://192.168.222.112/onvif-media/media.amp?profile=profile_11_jpeg&sessiontimeout=60&streamtype=unicast",
                    "Video": {
                        "BitRate": "2147483647",
                        "Encoder": "JPEG",
                        "EncoderInterval": "1",
                        "FrameRate": "30",
                        "Quality": "70",
                        "Resolution": "2560x1440"
                    }
                },
                "dewarpConfiguration": {},
                "href": "https://orchid.ipconfigure.com/service/streams/2651",
                "id": 2651,
                "name": "profile_11 jpeg",
                "recordWhenSecondary": false,
                "recordingConfiguration": {
                    "bgseg": {
                        "boxArea": "1",
                        "dilate": "10",
                        "motionMask": {
                            "href": ""
                        },
                        "postErode": "2",
                        "preErode": "2",
                        "threshold": "25"
                    },
                    "decode": {
                        "keyFramesOnly": "true"
                    },
                    "filesplit": {
                        "motionMode": "0",
                        "recordState": "true",
                        "timePeriod": "60"
                    },
                    "mode": "ALL_FEATURES_MODE",
                    "motionReducer": "false"
                }
            }
        ],
        "tags": [
            {
                "key": "dewarp",
                "type": "intrinsic",
                "value": null
            },
            {
                "key": "ptz",
                "type": "intrinsic",
                "value": null
            }
        ]
    },
    {
        "active": true,
        "capabilities": {
            "camera": {
                "DHCP": {
                    "capabilities": {
                        "Off": {
                            "HostName": {
                                "max": "63",
                                "type": "string"
                            },
                            "IPAddress": {
                                "type": "ip_address"
                            },
                            "NetworkGateway": {
                                "type": "ip_address"
                            },
                            "SubnetMask": {
                                "type": "ip_address"
                            }
                        },
                        "On": {
                            "IPAddress": {
                                "readOnly": "true",
                                "type": "ip_address"
                            }
                        }
                    },
                    "options": [
                        "On",
                        "Off"
                    ],
                    "type": "enum"
                },
                "NTP": {
                    "Mode": {
                        "capabilities": {
                            "manual": {
                                "Server": {
                                    "default": "pool.ntp.org",
                                    "type": "string"
                                }
                            }
                        },
                        "default": "disabled",
                        "options": [
                            "disabled",
                            "dhcp",
                            "manual"
                        ],
                        "type": "enum"
                    }
                },
                "PTZ": {
                    "maxPresets": "0",
                    "pan": "false",
                    "relativeFOV": "false",
                    "tilt": "false",
                    "zoom": "false"
                },
                "PossibleStreams": "20",
                "TimeZone": {
                    "DaylightSavings": {
                        "default": "false",
                        "options": [
                            "true",
                            "false"
                        ],
                        "type": "enum"
                    },
                    "PosixTZ": {
                        "default": "UTC0",
                        "type": "posix_tz_string"
                    }
                },
                "TransportProtocol": {
                    "default": "AUTO",
                    "options": [
                        "AUTO",
                        "UDP",
                        "UDP_MCAST",
                        "HTTP",
                        "TCP"
                    ],
                    "type": "enum"
                }
            },
            "stream": {
                "Metadata": {
                    "Mode": {
                        "capabilities": {
                            "On": {
                                "TopicFilter": {
                                    "capabilities": {
                                        "tns1:Device/Trigger/DigitalInput": {
                                            "MessageType": {
                                                "Data": [
                                                    {
                                                        "Name": "LogicalState",
                                                        "Type": "xsd:boolean"
                                                    }
                                                ],
                                                "Source": [
                                                    {
                                                        "Name": "InputToken",
                                                        "Type": "tt:ReferenceToken"
                                                    }
                                                ]
                                            }
                                        },
                                        "tns1:Device/Trigger/Relay": {
                                            "MessageType": {
                                                "Data": [
                                                    {
                                                        "Name": "LogicalState",
                                                        "Type": "tt:RelayLogicalState"
                                                    }
                                                ],
                                                "Source": [
                                                    {
                                                        "Name": "RelayToken",
                                                        "Type": "tt:ReferenceToken"
                                                    }
                                                ]
                                            }
                                        },
                                        "tns1:Device/tnsaxis:Casing/Open": {
                                            "MessageType": {
                                                "Data": [
                                                    {
                                                        "Name": "Open",
                                                        "Type": "xsd:boolean"
                                                    }
                                                ],
                                                "Source": [
                                                    {
                                                        "Name": "Name",
                                                        "Type": "xsd:string"
                                                    }
                                                ]
                                            }
                                        },
                                        "tns1:Device/tnsaxis:HardwareFailure/StorageFailure": {
                                            "MessageType": {
                                                "Data": [
                                                    {
                                                        "Name": "disruption",
                                                        "Type": "xsd:boolean"
                                                    }
                                                ],
                                                "Source": [
                                                    {
                                                        "Name": "disk_id",
                                                        "Type": "xsd:string"
                                                    }
                                                ]
                                            }
                                        },
                                        "tns1:Device/tnsaxis:Heater/Status": {
                                            "MessageType": {
                                                "Data": [
                                                    {
                                                        "Name": "running",
                                                        "Type": "xsd:boolean"
                                                    }
                                                ],
                                                "Source": [
                                                    {
                                                        "Name": "heater",
                                                        "Type": "xsd:int"
                                                    }
                                                ]
                                            }
                                        },
                                        "tns1:Device/tnsaxis:IO/SupervisedPort": {
                                            "MessageType": {
                                                "Data": [
                                                    {
                                                        "Name": "tampered",
                                                        "Type": "xsd:boolean"
                                                    },
                                                    {
                                                        "Name": "state",
                                                        "Type": "xsd:string"
                                                    }
                                                ],
                                                "Source": [
                                                    {
                                                        "Name": "port",
                                                        "Type": "xsd:int"
                                                    }
                                                ]
                                            }
                                        },
                                        "tns1:Device/tnsaxis:IO/VirtualInput": {
                                            "MessageType": {
                                                "Data": [
                                                    {
                                                        "Name": "active",
                                                        "Type": "xsd:boolean"
                                                    }
                                                ],
                                                "Source": [
                                                    {
                                                        "Name": "port",
                                                        "Type": "xsd:int"
                                                    }
                                                ]
                                            }
                                        },
                                        "tns1:Device/tnsaxis:IO/VirtualPort": {
                                            "MessageType": {
                                                "Data": [
                                                    {
                                                        "Name": "state",
                                                        "Type": "xsd:boolean"
                                                    }
                                                ],
                                                "Source": [
                                                    {
                                                        "Name": "port",
                                                        "Type": "xsd:int"
                                                    }
                                                ]
                                            }
                                        },
                                        "tns1:Device/tnsaxis:Light/Status": {
                                            "MessageType": {
                                                "Data": [
                                                    {
                                                        "Name": "state",
                                                        "Type": "xsd:string"
                                                    }
                                                ],
                                                "Source": [
                                                    {
                                                        "Name": "id",
                                                        "Type": "xsd:int"
                                                    }
                                                ]
                                            }
                                        },
                                        "tns1:Device/tnsaxis:Network/AddressAdded": {
                                            "MessageType": {
                                                "Data": [
                                                    {
                                                        "Name": "address",
                                                        "Type": "xsd:string"
                                                    },
                                                    {
                                                        "Name": "origin",
                                                        "Type": "xsd:string"
                                                    }
                                                ],
                                                "Source": [
                                                    {
                                                        "Name": "interface",
                                                        "Type": "xsd:string"
                                                    }
                                                ]
                                            }
                                        },
                                        "tns1:Device/tnsaxis:Network/AddressRemoved": {
                                            "MessageType": {
                                                "Data": [
                                                    {
                                                        "Name": "address",
                                                        "Type": "xsd:string"
                                                    },
                                                    {
                                                        "Name": "origin",
                                                        "Type": "xsd:string"
                                                    }
                                                ],
                                                "Source": [
                                                    {
                                                        "Name": "interface",
                                                        "Type": "xsd:string"
                                                    }
                                                ]
                                            }
                                        },
                                        "tns1:Device/tnsaxis:Network/BlockedIP": {
                                            "MessageType": {
                                                "Data": [
                                                    {
                                                        "Name": "address",
                                                        "Type": "xsd:string"
                                                    }
                                                ]
                                            }
                                        },
                                        "tns1:Device/tnsaxis:Network/Lost": {
                                            "MessageType": {
                                                "Data": [
                                                    {
                                                        "Name": "lost",
                                                        "Type": "xsd:boolean"
                                                    }
                                                ],
                                                "Source": [
                                                    {
                                                        "Name": "interface",
                                                        "Type": "xsd:string"
                                                    }
                                                ]
                                            }
                                        },
                                        "tns1:Device/tnsaxis:RingPowerLimitExceeded": {
                                            "MessageType": {
                                                "Data": [
                                                    {
                                                        "Name": "limit_exceeded",
                                                        "Type": "xsd:boolean"
                                                    }
                                                ],
                                                "Source": [
                                                    {
                                                        "Name": "input",
                                                        "Type": "xsd:int"
                                                    }
                                                ]
                                            }
                                        },
                                        "tns1:Device/tnsaxis:Sensor/PIR": {
                                            "MessageType": {
                                                "Data": [
                                                    {
                                                        "Name": "state",
                                                        "Type": "xsd:boolean"
                                                    }
                                                ],
                                                "Source": [
                                                    {
                                                        "Name": "sensor",
                                                        "Type": "xsd:int"
                                                    }
                                                ]
                                            }
                                        },
                                        "tns1:Device/tnsaxis:Status/SystemReady": {
                                            "MessageType": {
                                                "Data": [
                                                    {
                                                        "Name": "ready",
                                                        "Type": "xsd:boolean"
                                                    }
                                                ]
                                            }
                                        },
                                        "tns1:Device/tnsaxis:Status/Temperature/Above": {
                                            "MessageType": {
                                                "Data": [
                                                    {
                                                        "Name": "sensor_level",
                                                        "Type": "xsd:boolean"
                                                    }
                                                ]
                                            }
                                        },
                                        "tns1:Device/tnsaxis:Status/Temperature/Above_or_below": {
                                            "MessageType": {
                                                "Data": [
                                                    {
                                                        "Name": "sensor_level",
                                                        "Type": "xsd:boolean"
                                                    }
                                                ]
                                            }
                                        },
                                        "tns1:Device/tnsaxis:Status/Temperature/Below": {
                                            "MessageType": {
                                                "Data": [
                                                    {
                                                        "Name": "sensor_level",
                                                        "Type": "xsd:boolean"
                                                    }
                                                ]
                                            }
                                        },
                                        "tns1:Device/tnsaxis:Status/Temperature/Inside": {
                                            "MessageType": {
                                                "Data": [
                                                    {
                                                        "Name": "sensor_level",
                                                        "Type": "xsd:boolean"
                                                    }
                                                ]
                                            }
                                        },
                                        "tns1:Device/tnsaxis:SystemMessage/ActionFailed": {
                                            "MessageType": {
                                                "Data": [
                                                    {
                                                        "Name": "description",
                                                        "Type": "xsd:string"
                                                    }
                                                ]
                                            }
                                        },
                                        "tns1:LightControl/tnsaxis:LightStatusChanged/Status": {
                                            "MessageType": {
                                                "Data": [
                                                    {
                                                        "Name": "state",
                                                        "Type": "xsd:string"
                                                    }
                                                ]
                                            }
                                        },
                                        "tns1:Media/ConfigurationChanged": {
                                            "MessageType": {
                                                "Source": [
                                                    {
                                                        "Name": "Type",
                                                        "Type": "xsd:string"
                                                    },
                                                    {
                                                        "Name": "Token",
                                                        "Type": "tt:ReferenceToken"
                                                    }
                                                ]
                                            }
                                        },
                                        "tns1:Media/ProfileChanged": {
                                            "MessageType": {
                                                "Source": [
                                                    {
                                                        "Name": "Token",
                                                        "Type": "tt:ReferenceToken"
                                                    }
                                                ]
                                            }
                                        },
                                        "tns1:RecordingConfig/CreateRecording": {
                                            "MessageType": {
                                                "Source": [
                                                    {
                                                        "Name": "RecordingToken",
                                                        "Type": "tt:RecordingReference"
                                                    }
                                                ]
                                            }
                                        },
                                        "tns1:RecordingConfig/CreateTrack": {
                                            "MessageType": {
                                                "Source": [
                                                    {
                                                        "Name": "TrackToken",
                                                        "Type": "tt:TrackReference"
                                                    },
                                                    {
                                                        "Name": "RecordingToken",
                                                        "Type": "tt:RecordingReference"
                                                    }
                                                ]
                                            }
                                        },
                                        "tns1:RecordingConfig/DeleteRecording": {
                                            "MessageType": {
                                                "Source": [
                                                    {
                                                        "Name": "RecordingToken",
                                                        "Type": "tt:RecordingReference"
                                                    }
                                                ]
                                            }
                                        },
                                        "tns1:RecordingConfig/DeleteTrack": {
                                            "MessageType": {
                                                "Source": [
                                                    {
                                                        "Name": "TrackToken",
                                                        "Type": "tt:TrackReference"
                                                    },
                                                    {
                                                        "Name": "RecordingToken",
                                                        "Type": "tt:RecordingReference"
                                                    }
                                                ]
                                            }
                                        },
                                        "tns1:RecordingConfig/JobState": {
                                            "MessageType": {
                                                "Data": [
                                                    {
                                                        "Name": "State",
                                                        "Type": "xsd:string"
                                                    },
                                                    {
                                                        "Name": "Information",
                                                        "Type": "tt:RecordingJobStateInformation"
                                                    }
                                                ],
                                                "Source": [
                                                    {
                                                        "Name": "RecordingJobToken",
                                                        "Type": "tt:RecordingJobReference"
                                                    }
                                                ]
                                            }
                                        },
                                        "tns1:RecordingConfig/RecordingConfiguration": {
                                            "MessageType": {
                                                "Data": [
                                                    {
                                                        "Name": "Configuration",
                                                        "Type": "tt:RecordingConfiguration"
                                                    }
                                                ],
                                                "Source": [
                                                    {
                                                        "Name": "RecordingToken",
                                                        "Type": "tt:RecordingReference"
                                                    }
                                                ]
                                            }
                                        },
                                        "tns1:RecordingConfig/RecordingJobConfiguration": {
                                            "MessageType": {
                                                "Data": [
                                                    {
                                                        "Name": "Configuration",
                                                        "Type": "tt:RecordingJobConfiguration"
                                                    }
                                                ],
                                                "Source": [
                                                    {
                                                        "Name": "RecordingJobToken",
                                                        "Type": "tt:RecordingJobReference"
                                                    }
                                                ]
                                            }
                                        },
                                        "tns1:RecordingConfig/TrackConfiguration": {
                                            "MessageType": {
                                                "Data": [
                                                    {
                                                        "Name": "Configuration",
                                                        "Type": "tt:TrackConfiguration"
                                                    }
                                                ],
                                                "Source": [
                                                    {
                                                        "Name": "TrackToken",
                                                        "Type": "tt:TrackReference"
                                                    },
                                                    {
                                                        "Name": "RecordingToken",
                                                        "Type": "tt:RecordingReference"
                                                    }
                                                ]
                                            }
                                        },
                                        "tns1:UserAlarm/tnsaxis:Recurring/Interval": {
                                            "MessageType": {
                                                "Data": [
                                                    {
                                                        "Name": "active",
                                                        "Type": "xsd:boolean"
                                                    }
                                                ],
                                                "Source": [
                                                    {
                                                        "Name": "id",
                                                        "Type": "xsd:string"
                                                    }
                                                ]
                                            }
                                        },
                                        "tns1:VideoSource/GlobalSceneChange/ImagingService": {
                                            "MessageType": {
                                                "Data": [
                                                    {
                                                        "Name": "State",
                                                        "Type": "xsd:boolean"
                                                    }
                                                ],
                                                "Source": [
                                                    {
                                                        "Name": "Source",
                                                        "Type": "tt:ReferenceToken"
                                                    }
                                                ]
                                            }
                                        },
                                        "tns1:VideoSource/tnsaxis:ABR": {
                                            "MessageType": {
                                                "Data": [
                                                    {
                                                        "Name": "abr_error",
                                                        "Type": "xsd:boolean"
                                                    }
                                                ],
                                                "Source": [
                                                    {
                                                        "Name": "VideoSourceConfigurationToken",
                                                        "Type": "xsd:int"
                                                    }
                                                ]
                                            }
                                        },
                                        "tns1:VideoSource/tnsaxis:DayNightVision": {
                                            "MessageType": {
                                                "Data": [
                                                    {
                                                        "Name": "day",
                                                        "Type": "xsd:boolean"
                                                    }
                                                ],
                                                "Source": [
                                                    {
                                                        "Name": "VideoSourceConfigurationToken",
                                                        "Type": "xsd:int"
                                                    }
                                                ]
                                            }
                                        },
                                        "tns1:VideoSource/tnsaxis:LiveStreamAccessed": {
                                            "MessageType": {
                                                "Data": [
                                                    {
                                                        "Name": "accessed",
                                                        "Type": "xsd:boolean"
                                                    }
                                                ]
                                            }
                                        },
                                        "tns1:VideoSource/tnsaxis:Tampering": {
                                            "MessageType": {
                                                "Data": [
                                                    {
                                                        "Name": "tampering",
                                                        "Type": "xsd:int"
                                                    }
                                                ],
                                                "Source": [
                                                    {
                                                        "Name": "channel",
                                                        "Type": "xsd:int"
                                                    }
                                                ]
                                            }
                                        },
                                        "tnsaxis:AudioControl/DigitalSignalStatus": {
                                            "MessageType": {
                                                "Data": [
                                                    {
                                                        "Name": "signal_status",
                                                        "Type": "xsd:string"
                                                    }
                                                ],
                                                "Source": [
                                                    {
                                                        "Name": "input",
                                                        "Type": "xsd:int"
                                                    }
                                                ]
                                            }
                                        },
                                        "tnsaxis:Storage/Alert": {
                                            "MessageType": {
                                                "Data": [
                                                    {
                                                        "Name": "temperature",
                                                        "Type": "xsd:int"
                                                    },
                                                    {
                                                        "Name": "overall_health",
                                                        "Type": "xsd:int"
                                                    },
                                                    {
                                                        "Name": "alert",
                                                        "Type": "xsd:boolean"
                                                    },
                                                    {
                                                        "Name": "wear",
                                                        "Type": "xsd:int"
                                                    }
                                                ],
                                                "Source": [
                                                    {
                                                        "Name": "disk_id",
                                                        "Type": "xsd:string"
                                                    }
                                                ]
                                            }
                                        },
                                        "tnsaxis:Storage/Disruption": {
                                            "MessageType": {
                                                "Data": [
                                                    {
                                                        "Name": "disruption",
                                                        "Type": "xsd:boolean"
                                                    }
                                                ],
                                                "Source": [
                                                    {
                                                        "Name": "disk_id",
                                                        "Type": "xsd:string"
                                                    }
                                                ]
                                            }
                                        },
                                        "tnsaxis:Storage/Recording": {
                                            "MessageType": {
                                                "Data": [
                                                    {
                                                        "Name": "recording",
                                                        "Type": "xsd:boolean"
                                                    }
                                                ]
                                            }
                                        }
                                    },
                                    "default": [],
                                    "options": [
                                        "tns1:Device/Trigger/DigitalInput",
                                        "tns1:Device/Trigger/Relay",
                                        "tns1:Device/tnsaxis:Casing/Open",
                                        "tns1:Device/tnsaxis:HardwareFailure/StorageFailure",
                                        "tns1:Device/tnsaxis:Heater/Status",
                                        "tns1:Device/tnsaxis:IO/SupervisedPort",
                                        "tns1:Device/tnsaxis:IO/VirtualInput",
                                        "tns1:Device/tnsaxis:IO/VirtualPort",
                                        "tns1:Device/tnsaxis:Light/Status",
                                        "tns1:Device/tnsaxis:Network/AddressAdded",
                                        "tns1:Device/tnsaxis:Network/AddressRemoved",
                                        "tns1:Device/tnsaxis:Network/BlockedIP",
                                        "tns1:Device/tnsaxis:Network/Lost",
                                        "tns1:Device/tnsaxis:RingPowerLimitExceeded",
                                        "tns1:Device/tnsaxis:Sensor/PIR",
                                        "tns1:Device/tnsaxis:Status/SystemReady",
                                        "tns1:Device/tnsaxis:Status/Temperature/Above",
                                        "tns1:Device/tnsaxis:Status/Temperature/Above_or_below",
                                        "tns1:Device/tnsaxis:Status/Temperature/Below",
                                        "tns1:Device/tnsaxis:Status/Temperature/Inside",
                                        "tns1:Device/tnsaxis:SystemMessage/ActionFailed",
                                        "tns1:LightControl/tnsaxis:LightStatusChanged/Status",
                                        "tns1:Media/ConfigurationChanged",
                                        "tns1:Media/ProfileChanged",
                                        "tns1:RecordingConfig/CreateRecording",
                                        "tns1:RecordingConfig/CreateTrack",
                                        "tns1:RecordingConfig/DeleteRecording",
                                        "tns1:RecordingConfig/DeleteTrack",
                                        "tns1:RecordingConfig/JobState",
                                        "tns1:RecordingConfig/RecordingConfiguration",
                                        "tns1:RecordingConfig/RecordingJobConfiguration",
                                        "tns1:RecordingConfig/TrackConfiguration",
                                        "tns1:UserAlarm/tnsaxis:Recurring/Interval",
                                        "tns1:VideoSource/GlobalSceneChange/ImagingService",
                                        "tns1:VideoSource/tnsaxis:ABR",
                                        "tns1:VideoSource/tnsaxis:DayNightVision",
                                        "tns1:VideoSource/tnsaxis:LiveStreamAccessed",
                                        "tns1:VideoSource/tnsaxis:Tampering",
                                        "tnsaxis:AudioControl/DigitalSignalStatus",
                                        "tnsaxis:Storage/Alert",
                                        "tnsaxis:Storage/Disruption",
                                        "tnsaxis:Storage/Recording"
                                    ],
                                    "type": "multiselect"
                                }
                            }
                        },
                        "default": "Off",
                        "options": [
                            "Off",
                            "On"
                        ],
                        "type": "enum"
                    }
                },
                "Video": {
                    "Encoder": {
                        "capabilities": {
                            "H264": {
                                "BitRate": {
                                    "default": "-1073741824",
                                    "max": "2147483647",
                                    "min": "1",
                                    "type": "int"
                                },
                                "EncoderInterval": {
                                    "default": "1",
                                    "max": "1",
                                    "min": "1",
                                    "type": "int"
                                },
                                "FrameRate": {
                                    "default": "30",
                                    "max": "30",
                                    "min": "1",
                                    "type": "int"
                                },
                                "GOVLength": {
                                    "default": "10",
                                    "max": "200",
                                    "min": "1",
                                    "type": "int"
                                },
                                "Profile": {
                                    "default": "High",
                                    "options": [
                                        "Baseline",
                                        "Main",
                                        "High"
                                    ],
                                    "type": "enum"
                                },
                                "Resolution": {
                                    "default": "640x360",
                                    "options": [
                                        "640x360",
                                        "1280x720",
                                        "1920x1080"
                                    ],
                                    "type": "enum"
                                }
                            },
                            "JPEG": {
                                "BitRate": {
                                    "default": "-1073741824",
                                    "max": "2147483647",
                                    "min": "1",
                                    "type": "int"
                                },
                                "EncoderInterval": {
                                    "default": "1",
                                    "max": "1",
                                    "min": "1",
                                    "type": "int"
                                },
                                "FrameRate": {
                                    "default": "30",
                                    "max": "30",
                                    "min": "1",
                                    "type": "int"
                                },
                                "Resolution": {
                                    "default": "640x360",
                                    "options": [
                                        "640x360",
                                        "1280x720",
                                        "1920x1080"
                                    ],
                                    "type": "enum"
                                }
                            }
                        },
                        "default": "JPEG",
                        "options": [
                            "H264",
                            "JPEG"
                        ],
                        "type": "enum"
                    },
                    "Quality": {
                        "default": "50",
                        "max": "100",
                        "min": "0",
                        "type": "int"
                    }
                }
            }
        },
        "configuration": {
            "DHCP": "On",
            "Date": "2021-Aug-23",
            "Firmware": "9.80.2",
            "HardwareID": "7D6",
            "HostName": "axis-b8a44f04032f",
            "IPAddress": "192.168.202.179",
            "MAC": "B8:A4:4F:04:03:2F",
            "Manufacturer": "AXIS",
            "Model": "P3715-PLVE",
            "NTP": {
                "Mode": "dhcp"
            },
            "NetworkGateway": "192.168.0.1",
            "ONVIF": {
                "NetworkInterfaceToken": "eth0"
            },
            "SerialNumber": "B8A44F04032F",
            "SubnetMask": "255.255.255.0",
            "Time": "20:36:51",
            "TimeZone": {
                "DaylightSavings": "true",
                "PosixTZ": "EST5EDT,M3.2.0,M11.1.0"
            }
        },
        "connectionUri": "http://192.168.202.179/onvif/device_service",
        "defaultViewStreamId": 2698,
        "driver": "ONVIF",
        "features": {
            "ptz": {
                "maxPresets": "0",
                "pan": "false",
                "relativeFOV": "false",
                "tilt": "false",
                "zoom": "false"
            }
        },
        "href": "https://orchid.ipconfigure.com/service/cameras/435",
        "id": 435,
        "name": "Technical Briefing Centre Exit",
        "primaryStream": {
            "href": "https://orchid.ipconfigure.com/service/streams/2698",
            "id": 2698,
            "status": {
                "href": "https://orchid.ipconfigure.com/service/streams/2698",
                "id": 2698,
                "lastArchiveWritten": 0,
                "lastFinalizedArchiveBytes": 0,
                "retryCount": 12407,
                "streamState": "idle",
                "streamStatistics": [
                    {
                        "windowSizeSeconds": 60
                    },
                    {
                        "windowSizeSeconds": 300
                    },
                    {
                        "windowSizeSeconds": 900
                    }
                ],
                "timestamp": 1751590394731
            }
        },
        "retention": 0,
        "secondaryStreams": [],
        "server": {
            "href": "https://orchid.ipconfigure.com/service/servers/1",
            "id": 1
        },
        "streams": [
            {
                "active": true,
                "camera": {
                    "href": "https://orchid.ipconfigure.com/service/cameras/435",
                    "id": 435
                },
                "configuration": {
                    "Audio": {
                        "Encoder": "none"
                    },
                    "Fixed": "true",
                    "Name": "profile_1 h264",
                    "ONVIF": {
                        "ProfileToken": "profile_1_h264",
                        "VideoEncoderConfigurationToken": "default_1_h264",
                        "VideoEncoderMulticastAddress": "0.0.0.0",
                        "VideoEncoderMulticastPort": "0"
                    },
                    "Resource": "rtsp://192.168.202.179/onvif-media/media.amp?profile=profile_1_h264&sessiontimeout=60&streamtype=unicast",
                    "Video": {
                        "BitRate": "3200",
                        "Encoder": "H264",
                        "EncoderInterval": "1",
                        "FrameRate": "16",
                        "GOVLength": "16",
                        "Profile": "Main",
                        "Quality": "70",
                        "Resolution": "1920x1080"
                    }
                },
                "dewarpConfiguration": {},
                "href": "https://orchid.ipconfigure.com/service/streams/2698",
                "id": 2698,
                "name": "profile_1 h264",
                "recordWhenSecondary": false,
                "recordingConfiguration": {
                    "bgseg": {
                        "boxArea": "1",
                        "dilate": "10",
                        "motionMask": {
                            "href": "https://orchid.ipconfigure.com/service/cameras/435/streams/2698/motion/mask"
                        },
                        "postErode": "2",
                        "preErode": "2",
                        "threshold": "25"
                    },
                    "decode": {
                        "keyFramesOnly": "true"
                    },
                    "filesplit": {
                        "motionMode": "0",
                        "recordState": "true"
                    },
                    "mode": "ALL_FEATURES_MODE",
                    "motionReducer": "true"
                }
            },
            {
                "active": true,
                "camera": {
                    "href": "https://orchid.ipconfigure.com/service/cameras/435",
                    "id": 435
                },
                "configuration": {
                    "Audio": {
                        "Encoder": "none"
                    },
                    "Fixed": "true",
                    "Name": "profile_2 h264",
                    "ONVIF": {
                        "ProfileToken": "profile_2_h264",
                        "VideoEncoderConfigurationToken": "default_2_h264",
                        "VideoEncoderMulticastAddress": "0.0.0.0",
                        "VideoEncoderMulticastPort": "0"
                    },
                    "Resource": "rtsp://192.168.202.179/onvif-media/media.amp?profile=profile_2_h264&sessiontimeout=60&streamtype=unicast",
                    "Video": {
                        "BitRate": "2147483647",
                        "Encoder": "H264",
                        "EncoderInterval": "1",
                        "FrameRate": "30",
                        "GOVLength": "32",
                        "Profile": "Main",
                        "Quality": "70",
                        "Resolution": "1920x1080"
                    }
                },
                "dewarpConfiguration": {},
                "href": "https://orchid.ipconfigure.com/service/streams/2699",
                "id": 2699,
                "name": "profile_2 h264",
                "recordWhenSecondary": false,
                "recordingConfiguration": {
                    "bgseg": {
                        "boxArea": "1",
                        "dilate": "10",
                        "motionMask": {
                            "href": ""
                        },
                        "postErode": "2",
                        "preErode": "2",
                        "threshold": "25"
                    },
                    "decode": {
                        "keyFramesOnly": "true"
                    },
                    "filesplit": {
                        "motionMode": "0",
                        "recordState": "true",
                        "timePeriod": "60"
                    },
                    "mode": "ALL_FEATURES_MODE",
                    "motionReducer": "false"
                }
            },
            {
                "active": true,
                "camera": {
                    "href": "https://orchid.ipconfigure.com/service/cameras/435",
                    "id": 435
                },
                "configuration": {
                    "Audio": {
                        "Encoder": "none"
                    },
                    "Fixed": "true",
                    "Name": "profile_1 jpeg",
                    "ONVIF": {
                        "ProfileToken": "profile_1_jpeg",
                        "VideoEncoderConfigurationToken": "default_1_jpeg",
                        "VideoEncoderMulticastAddress": "0.0.0.0",
                        "VideoEncoderMulticastPort": "0"
                    },
                    "Resource": "rtsp://192.168.202.179/onvif-media/media.amp?profile=profile_1_jpeg&sessiontimeout=60&streamtype=unicast",
                    "Video": {
                        "BitRate": "2147483647",
                        "Encoder": "JPEG",
                        "EncoderInterval": "1",
                        "FrameRate": "30",
                        "Quality": "70",
                        "Resolution": "1920x1080"
                    }
                },
                "dewarpConfiguration": {},
                "href": "https://orchid.ipconfigure.com/service/streams/2700",
                "id": 2700,
                "name": "profile_1 jpeg",
                "recordWhenSecondary": false,
                "recordingConfiguration": {
                    "bgseg": {
                        "boxArea": "1",
                        "dilate": "10",
                        "motionMask": {
                            "href": ""
                        },
                        "postErode": "2",
                        "preErode": "2",
                        "threshold": "25"
                    },
                    "decode": {
                        "keyFramesOnly": "true"
                    },
                    "filesplit": {
                        "motionMode": "0",
                        "recordState": "true",
                        "timePeriod": "60"
                    },
                    "mode": "ALL_FEATURES_MODE",
                    "motionReducer": "false"
                }
            },
            {
                "active": true,
                "camera": {
                    "href": "https://orchid.ipconfigure.com/service/cameras/435",
                    "id": 435
                },
                "configuration": {
                    "Audio": {
                        "Encoder": "none"
                    },
                    "Fixed": "true",
                    "Name": "profile_2 jpeg",
                    "ONVIF": {
                        "ProfileToken": "profile_2_jpeg",
                        "VideoEncoderConfigurationToken": "default_2_jpeg",
                        "VideoEncoderMulticastAddress": "0.0.0.0",
                        "VideoEncoderMulticastPort": "0"
                    },
                    "Resource": "rtsp://192.168.202.179/onvif-media/media.amp?profile=profile_2_jpeg&sessiontimeout=60&streamtype=unicast",
                    "Video": {
                        "BitRate": "2147483647",
                        "Encoder": "JPEG",
                        "EncoderInterval": "1",
                        "FrameRate": "30",
                        "Quality": "70",
                        "Resolution": "1920x1080"
                    }
                },
                "dewarpConfiguration": {},
                "href": "https://orchid.ipconfigure.com/service/streams/2701",
                "id": 2701,
                "name": "profile_2 jpeg",
                "recordWhenSecondary": false,
                "recordingConfiguration": {
                    "bgseg": {
                        "boxArea": "1",
                        "dilate": "10",
                        "motionMask": {
                            "href": ""
                        },
                        "postErode": "2",
                        "preErode": "2",
                        "threshold": "25"
                    },
                    "decode": {
                        "keyFramesOnly": "true"
                    },
                    "filesplit": {
                        "motionMode": "0",
                        "recordState": "true",
                        "timePeriod": "60"
                    },
                    "mode": "ALL_FEATURES_MODE",
                    "motionReducer": "false"
                }
            }
        ],
        "tags": []
    },
  ] as any[];
  const fakeBlob = new Blob(['fake image content'], { type: 'image/jpeg' });

  beforeEach(async () => {
    mockOrchidService = jasmine.createSpyObj('OrchidService', [
      'getAllCameras',
      'getPrimaryStreamFrame',
    ]);

    mockOrchidService.getAllCameras.and.returnValue(Promise.resolve(mockCameras));
    mockOrchidService.getPrimaryStreamFrame.and.returnValue(Promise.resolve(fakeBlob));

    await TestBed.configureTestingModule({
      imports: [CameraViewerComponent],
      providers: [
        provideHttpClientTesting(), 
        { provide: OrchidService, useValue: mockOrchidService}
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CameraViewerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call getAllCameras() and getPrimaryStreamFrame()', fakeAsync(async () => {
    tick(0); // triggers startWith(0) execution immediately

    // Assert
    expect(mockOrchidService.getAllCameras).toHaveBeenCalledTimes(1);
    expect(mockOrchidService.getPrimaryStreamFrame).toHaveBeenCalledTimes(2); // One per camera
  }));

});
