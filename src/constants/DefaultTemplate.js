/*
************textfield blank*******************

************selectfield blank*****************
*/

const Template1 = {
    sections: {
        Basic_Traits: {
            fields: {
                1: {
                    type: 'text',
                    meta: {
                        minlength: '1',
                        maxlength: '25',
                        label: 'Name',
                        helperText: "Enter Your Character's Name"
                    },
                },
                2: {
                    type: 'select',
                    meta: {
                        label: 'Race',
                        value: 'Human',
                        helperText: 'Select Your Character\'s Race'
                    },
                    options: [
                        { value: 'Human', text: 'Human' },
                        { value: 'Elf', text: 'Elf' },
                        { value: 'Dwarf', text: 'Dwarf' },
                        { value: 'Orc', text: 'Orc' },
                    ],
                },
                3: {
                    type: 'text',
                    meta: {
                        label: 'Age',
                        helperText: 'Input Characte\'s Age',
                        inputType: 'number',
                        InputProps: {
                            inputProps: {
                                min: '0',
                                max: '1000'
                            }
                        }
                    }
                },
                4: {
                    type: 'select',
                    meta: {
                        label: 'Class',
                        value: '',
                        helperText: 'Select Your Character\'s Class'
                    },
                    options: [
                        { value: 'Ranger', text: 'Ranger' },
                        { value: 'Assasin', text: 'Assasin' },
                        { value: 'Palladin', text: 'Palladin' },
                        { value: 'Priest', text: 'Priest' },
                        { value: 'Mage', text: 'Mage' },
                        { value: 'Warrior', text: 'Warrior' },
                    ],
                },
            }
        },
        Basic_Stats: {
            fields: {
                1: {
                    type: 'text',
                    meta: {
                        label: 'Strength',
                        inputType: 'number',
                        InputProps: {
                            inputProps: {
                                min: '0',
                                max: '20'
                            }
                        },
                        helperText: 'Strength Stat (max 20)',
                        margin: 'normal'
                    }
                },
                2: {
                    type: 'text',
                    meta: {
                        inputType: 'number',
                        InputProps: {
                            inputProps: {
                                min: '0',
                                max: '20'
                            }
                        },
                        label: 'Speed',
                        helperText: 'Speed Stat (max 20)',
                        margin: 'normal',
                        defaultValue: 0
                    }
                },
                3: {
                    type: 'text',
                    meta: {
                        inputType: 'number',
                        InputProps: {
                            inputProps: {
                                min: '0',
                                max: '20'
                            }
                        },
                        label: 'Dexterity',
                        helperText: 'Dexterity Stat (max 20)',
                        margin: 'normal',
                        defaultValue: 0
                    }
                },
                4: {
                    type: 'text',
                    meta: {
                        inputType: 'number',
                        InputProps: {
                            inputProps: {
                                min: '0',
                                max: '20'
                            }
                        },
                        label: 'Constitution',
                        helperText: 'Constitution Stat (max 20)',
                        margin: 'normal',
                        defaultValue: 0
                    }
                },
                5: {
                    type: 'text',
                    meta: {
                        inputType: 'number',
                        InputProps: {
                            inputProps: {
                                min: '0',
                                max: '20'
                            }
                        },
                        label: 'Intelligence',
                        helperText: 'Intelligence Stat (max 20)',
                        margin: 'normal',
                        defaultValue: 0
                    }
                },
                6: {
                    type: 'text',
                    meta: {
                        inputType: 'number',
                        InputProps: {
                            inputProps: {
                                min: '0',
                                max: '20'
                            }
                        },
                        label: 'Wisdom',
                        helperText: 'Wisdom Stat (max 20)',
                        margin: 'normal',
                        defaultValue: 0
                    }
                },
                7: {
                    type: 'text',
                    meta: {
                        inputType: 'number',
                        InputProps: {
                            inputProps: {
                                min: '0',
                                max: '20'
                            }
                        },
                        label: 'Charisma',
                        helperText: 'Charisma Stat (max 20)',
                        margin: 'normal',
                        defaultValue: 0
                    }
                },
                8: {
                    type: 'text',
                    meta: {
                        inputType: 'number',
                        InputProps: {
                            inputProps: {
                                min: '0',
                                max: '20'
                            }
                        },
                        label: 'Perception',
                        helperText: 'Perception Stat (max 20)',
                        margin: 'normal',
                        defaultValue: 0
                    }
                },
                9: {
                    type: 'text',
                    meta: {
                        inputType: 'number',
                        InputProps: {
                            inputProps: {
                                min: '0',
                                max: '20'
                            }
                        },
                        label: 'Initiative',
                        helperText: 'Initiative Stat (max 20)',
                        margin: 'normal',
                        defaultValue: 0
                    }
                },
                10: {
                    type: 'text',
                    meta: {
                        inputType: 'number',
                        InputProps: {
                            inputProps: {
                                min: '0',
                                max: '20'
                            }
                        },
                        label: 'Armor',
                        helperText: 'Armor Stat (max 20)',
                        margin: 'normal',
                        defaultValue: 0
                    }
                },
            }
        },
        Details: {
            fields: {
                1: {
                    type: 'text',
                    meta: {
                        multiline: true,
                        rows: 5,
                        rowsMax: 10,
                        label: 'Backstory',
                        helperText: 'Write Your Character\'s Backstory',
                    }
                }
            }
        }
    }
}

export default Template1